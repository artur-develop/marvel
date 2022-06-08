import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import CharactersList from "../../components/CharactersPage/CharactersList";
import { getApiResource } from "../../utils/network";
import { withErrorApi } from "../../hoc-helpers/withErrorApi";
import CharactersNavigation from "../../components/CharactersPage/CharactersNavigation/CharactersNavigation";
import { useLocation } from "react-router";

const CharactersPage = ({ setErrorApi }) => {
  const location = useLocation();
  const [charList, setCharList] = useState();
  const [currentOffset, setCurrentOffset] = useState(
    location.state ? location.state.offset : 0
  );
  const [currentLimit, setCurrentLimit] = useState(20);
  const [total, setTotal] = useState();

  useEffect(() => {
    const getResource = async (params) => {
      return await getApiResource(params);
    };
    getResource({ offset: currentOffset, limit: currentLimit })
      .then((res) => {
        if (res) {
          setCharList(res.results);
          setTotal(res.total);
          setErrorApi(false);
        } else {
          setErrorApi(true);
        }
      })
      .catch(function (error) {
        if (!charList) {
          console.log("Could not fetch data.", error.message);
          return false;
        }
      });
  }, [currentOffset]);

  return (
    <>
      <CharactersNavigation
        offset={currentOffset}
        limit={currentLimit}
        handleOffset={setCurrentOffset}
        total={total}
      />
      <CharactersList charList={charList} offset={currentOffset} />
    </>
  );
};

CharactersPage.propTypes = {
  setErrorApi: PropTypes.func,
};

export default withErrorApi(CharactersPage);

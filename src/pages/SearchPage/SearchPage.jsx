import React, { useCallback, useState } from "react";
import { getApiResource } from "../../utils/network";
import { withErrorApi } from "../../hoc-helpers/withErrorApi";
import { debounce } from "lodash";
import PropTypes from "prop-types";
import SearchPageInfo from "../../components/SearchPage/SearchPageInfo";
import UiInput from "../../components/UI/UiInput";
import styles from "./SearchPage.module.css";

const SearchPage = ({ setErrorApi }) => {
  const [inputSearchValue, setInputSearchValue] = useState("");
  const [charList, setCharList] = useState([]);

  const debouncedGetResponse = useCallback(
    debounce((value) => getResource(value), 400),
    []
  );

  const getResource = (value) => {
    const params = {
      ...(value && { nameStartsWith: value }),
      limit: 100,
    };
    const getResponse = async (params) => {
      return await getApiResource(params);
    };
    getResponse(params).then((res) => {
      if (res) {
        const charArr = res.results.map(({ id, name, thumbnail }) => {
          return {
            id,
            name,
            thumbnail,
          };
        });
        setCharList(charArr);
        setErrorApi(false);
      } else {
        setErrorApi(true);
      }
    });
  };

  const handleInputChange = (value) => {
    setInputSearchValue(value);
    debouncedGetResponse(value);
  };

  return (
    <>
      <h1 className="header__text">Search</h1>
      <UiInput
        value={inputSearchValue}
        handleInputChange={handleInputChange}
        placeholder="Input character's name"
        classes={styles.input__search}
      />
      <SearchPageInfo people={charList} />
    </>
  );
};

SearchPage.propTypes = {
  setErrorApi: PropTypes.func,
};

export default withErrorApi(SearchPage);

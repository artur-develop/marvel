import React, {useEffect, useState, Suspense} from 'react';
import {useParams} from "react-router";
import PropTypes from "prop-types";
import { useSelector } from "react-redux";
import {getApiResource} from "../../utils/network";
import {withErrorApi} from "../../hoc-helpers/withErrorApi";
import PersonInfo from "../../components/PersonPage/PersonInfo";
import PersonImage from "../../components/PersonPage/PersonImage";
import PersonLinkBack from "../../components/PersonPage/PersonLinkBack";
import UiLoading from "../../components/UI/UiLoading";

import styles from './PersonPage.module.css'

const PersonActivity = React.lazy(() => import('../../components/PersonPage/PersonActivity'));

const PersonPage = ({setErrorApi}) => {
    const {id} = useParams()
    const [personId, setPersonId] = useState(null)
    const [personInfo, setPersonInfo] = useState(null)
    const [personName, setPersonName] = useState(null)
    const [personImage, setPersonImage] = useState(null)
    const [personActivity, setPersonActivity] = useState([])
    const [personFavorite, setPersonFavorite] = useState(false)

    const storeData = useSelector(state => state.favoriteReducer)

    useEffect(() => {
        const getResource = async (params) => {
            return await getApiResource(params);
        }
        getResource({id: id}).then((res) => {
            const result = res.results[0]
            storeData[id] ? setPersonFavorite(true) : setPersonFavorite(false)

            if (result) {
                setPersonInfo([
                    { title: 'Description', data: result.description },
                    { title: 'Last modified', data: result.modified },
                    { title: 'Comics', data: result.comics.available.toString() },
                    { title: 'Events', data: result.events.available.toString() },
                    { title: 'Series', data: result.series.available.toString() },
                    { title: 'Stories', data: result.stories.available.toString() },
                ]);

                function setActivity() {
                    return result.comics.items.length ? result.comics.items :
                               (result.stories.items.length ? result.stories.items :
                                   (result.series.items.length ? result.series.items :
                                       (result.events.items.length ? result.events.items :
                                           0)))
                }
                setPersonId(result.id)
                setPersonName(result.name)
                setPersonImage(result.thumbnail.path + '.' + result.thumbnail?.extension)
                setPersonActivity(setActivity)
                setErrorApi(false);
            } else {
                setErrorApi(true);
            }
        })
            .catch(function (error) {
                if (!id) {
                    console.log('Could not fetch data.', error.message)
                    return false
                }
            });
    },[])

    return (
        <>
            <PersonLinkBack/>
            <div className={styles.wrapper}>
                <span className={styles.person__name}>{personName}</span>
                <div className={styles.container}>
                    <PersonImage
                        personId={personId}
                        personImage={personImage}
                        personName={personName}
                        personFavorite={personFavorite}
                        setPersonFavorite={setPersonFavorite}
                    />
                    {personInfo && <PersonInfo personInfo={personInfo}/>}
                    {personActivity &&
                        <Suspense fallback={<UiLoading />}>
                            <PersonActivity personActivity={personActivity}/>
                        </Suspense>
                    }
                </div>
            </div>
        </>
    );
};

PersonPage.prototypes = {
    setErrorApi: PropTypes.func
}

export default withErrorApi(PersonPage);
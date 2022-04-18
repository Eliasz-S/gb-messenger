import './Articles.styles.css';
import { Button } from "@mui/material";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FETCH_STATUSES } from "../../components/utils/constants";
import { getArticles } from "../../store/articles/actions";
import { selectArticles, selectArticlesError, selectArticlesStatus } from "../../store/articles/selectors";

export const Articles = () => {
    const dispatch = useDispatch();
    const articles = useSelector(selectArticles);
    const error = useSelector(selectArticlesError);
    const status = useSelector(selectArticlesStatus);

    const sendRequest = () => {
        dispatch(getArticles())
    };

    useEffect(() => {
        sendRequest();
    }, []);

    return (
        <>
            <h3>Articles</h3>
            <Button onClick={sendRequest} variant="contained">Get articles</Button>
            <div style={{'margin': 20}}>
                {
                    status === FETCH_STATUSES.REQUEST && 
                    <div className="cssload-loader">
                        <div className="cssload-inner cssload-one"></div>
                        <div className="cssload-inner cssload-two"></div>
                        <div className="cssload-inner cssload-three"></div>
                    </div>
                }
            </div>
            <div>{error && <p>{error}</p>}</div>
            <div>
                <ul>
                    {articles.map((article, index) => (
                        <li key={index}>{article.title}</li>
                    ))}
                </ul>
            </div>
        </>
    );
}
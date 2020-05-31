import React from "react";
import { Container, Row, Input } from "reactstrap";
import { MonzacContext } from '../context/monzacContext';
import Parser from 'html-react-parser';

const articleReaderStyle = {
    backgroundColor: 'white',
    marginBottom: '10px',
    paddingBottom: '10px'
}
const styles = {
    boxShadow: "none",
};
const loadEditArticle = (e, currentArticle, callback) => {
    e.preventDefault()
    alert("foo")
}
class ArticleReader extends React.Component {
    state = {
        canEdit: false
    }
    render() {
        return (
            <MonzacContext.Consumer>
                {(context) => (
                    <React.Fragment>
                        <Container style={articleReaderStyle}>
                            <Row className='float-right'>
                                <span className='emotion-style' onClick={context.toggleArticleReader} >X</span>
                            </Row>
                            <br />
                            <Row xs="1">
                                <div>
                                    <p className="article-title-style">{Parser(context.state.currentArticle.title)}</p>
                                </div>
                            </Row>
                            <Row xs="1">
                                <div className="article-style">
                                    {Parser(context.state.currentArticle.source)}
                                </div>
                            </Row>
                            <Row xs="1" id="article-emotion-section" className="article-emotion-section-style">
                                <div>
                                    <span className='emotion-style'>Like</span>
                                    <span className='emotion-style'>Share</span>
                                    {
                                        context.state.currentArticle.canEdit ?
                                            <span className='emotion-style'
                                                onClick={context.enableEditArticle}
                                            >Edit</span>
                                            : null
                                    }

                                </div>
                            </Row>
                            <Row xs="1" id="article-response-section">
                                <Input placeholder='comment' style={styles}></Input>
                            </Row>
                        </Container>
                    </React.Fragment >
                )}
            </MonzacContext.Consumer>
        );
    }
}

export default ArticleReader;
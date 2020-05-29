import React from "react";
import { Container, Row, Input } from "reactstrap";
import { MonzacContext } from '../context/monzacContext'
// const titleStyle = {
//     fontSize: '20px',
//     fontStyle: 'oblique',
//     fontWeight: '400'
// }
// const articleStyle = {
//     fontSize: '16px'
// }
const articleReaderStyle = {
    backgroundColor: 'white',
    marginBottom: '10px',
    paddingBottom: '10px'
}
const styles = {
    boxShadow: "none",
};

class ArticleReader extends React.Component {
    state = {}
    render() {
        return (
            <MonzacContext.Consumer>
                {(context) => (
                    <React.Fragment>
                        <Container style={articleReaderStyle}>
                            <Row className='float-right'>
                                <span className='immotion-style' onClick={context.toggleArticleReader} >X</span>
                            </Row>
                            <br />
                            <Row xs="1">
                                <div>
                                    <p className="article-title-style">{context.state.currentArticle.title}</p>
                                    <hr></hr>
                                </div>
                            </Row>
                            <Row xs="1">
                                <div className="article-style">
                                    {context.state.currentArticle.source}
                                </div>
                            </Row>
                            <Row xs="1" id="article-immotion-section">
                                <div>
                                    <span className='immotion-style'>Like</span><span className='immotion-style'>Share</span>
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
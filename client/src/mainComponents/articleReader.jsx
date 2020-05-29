import React from "react";
import { Container, Row, Input } from "reactstrap";

const titleStyle = {
    fontSize: '20px',
    fontStyle: 'oblique',
    fontWeight: '400'
}
const articleStyle = {
    fontSize: '16px'
}
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
            <React.Fragment>
                <Container style={articleReaderStyle}>
                    <Row className='float-right'>
                        <span className='immotion-style' >X</span>
                    </Row>
                    <br />
                    <Row xs="1">
                        <div>
                            <p style={titleStyle}>AAAA fdjfh dgoege on georgnerog  oergerjer oergnergner fbwefbwf onewfnwef oegneg</p>
                            <hr></hr>
                        </div>
                    </Row>
                    <Row xs="1">
                        <div style={articleStyle}>
                            ඒත් තොන්ඩමන් මහත්තයා? අපි දේශපාලඥයෙක් විදියට එතුමාට ගරු කරනවා. මළ නියෝජිත වරයෙක් විදියට දකිනවා. ඒත් මේ වෙලාවෙ මේ කරන දේ හරිද? දේහය හැම තැනම අරගෙන යනවා. මහජන ගෞරවයට තියෙනවා. ඒ මදිවට ලොකු පිට්ටනියක මහ සෙනගක් මැද්දේ ආදාහයන කරන්න ලැස්ති කරලා. ඒ මොකද? එයාට විතරක් අමුතු සැලකිලි. අනික තොණ්ඩමන් කියන්නේ දෙමළ මිනිස්සු ගොඩක් ගරු කරන චරිතයක්. ඒ වගේ කෙනෙක්ගේ අවසන් කටයුතු වලට ඒ මිනිස්සු යන්නේ නැති වෙයි කියලා හිතනවාද? දේහය බලන්න මීටරේ තියාන යයි කියලා හිතනවාද? මම නම් මේ කරන දේවල් වලට එකග නැහැ. මොන හේතුවට කරනවාද කියලා දන්න කෙනෙක් ඉනන්නවා නම් පැහැදිලි කරලා දුන්නොත් හොදයි. මට මෙතන දේශපාලනයක් වත් ජාති ආගම් භේදයක්
                            වත් නැහැ. ඒත් මේ කරන දේවල් අපිට තේරෙන්නේ නහැ.
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
            </React.Fragment >);
    }
}

export default ArticleReader;
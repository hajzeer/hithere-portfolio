import React from 'react';
import styled from 'styled-components';

const ContactForm = () => {

    const ContactFormStyled = styled.div`
    width: 100%;
    top: 0;
    left: 0;
    padding: 0;
    margin: 0;
    z-index: 2;
    }
`;

    const ContactFormInner = styled.form`
    position: relative;
    overflow: hidden;
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    z-index: 2;
    
    color: #1a1a1a;
    text-align: center;
`;

    const BackgroundDiv = styled.div`
position: absolute;
border-top: 100vh solid #99ff00;
border-right: 100vw solid transparent;
margin: 0;
padding: 0;
`;

    const InputStyle = styled.input`
width: 80%;
font-size: 15px;
height: 20px;
background: transparent;
color: #000;
border-color: #000 solid;
border: none;
border-bottom: 3px solid;
margin: 15px;
text-align: center;

&:focus {
  outline: none;
  
  -webkit-appearance: none;
  -webkit-box-shadow: 0 10px 20px -4px rgba(26, 26, 26, .8);
  -moz-box-shadow: 0 10px 20px -4px rgba(26, 26, 26, .8);
  box-shadow: 0 10px 20px -4px rgba(26, 26, 26, .8);
}

@media (min-width: 768px) {


font-size: 25px;
height: 30px;

}

@media (min-width: 1024px) {

width: 60%;
font-size: 15px;
height: 30px;    
}
`;


    const TextAreaStyle = styled.textarea`
position: relative;
width: 80%;
font-size: 15px;
height: 100px;
color: #1a1a1a;
border-color: #000 solid;
border-size: 3px solid;
resize: none;
margin-top: 20px;

&:focus {
  outline: none;
  
  -webkit-appearance: none;
  -webkit-box-shadow: 0 10px 20px -4px rgba(26, 26, 26, .8);
  -moz-box-shadow: 0 10px 20px -4px rgba(26, 26, 26, .8);
  box-shadow: 0 10px 20px -4px rgba(26, 26, 26, .8);
}

@media (min-width: 768px) {

font-size: 25px;
height: 200px;
}

@media (min-width: 1024px) {

width: 60%;
font-size: 15px;
height: 150px;    
}

`;

    const SendButtonStyle = styled.button`
margin: 15px;
width: 80%;
height: 20px;
border-radius: 25px;
background-color: #1a1a1a;
border-color: #1a1a1a;
border-size: 40px solid;
cursor: pointer;
font-size: 15px;
color: #FFFFFF;

display: flex;
align-items: center;
justify-content: center;

&:hover, &:focus {
outline: none;
background: #FFFFFF;
color: #1a1a1a;
}

@media (min-width: 768px) {

margin: 20px;
font-size: 25px;
height: 40px;

@media (min-width: 1024px) {

width: 20%;
font-size: 15px;
height: 20px;    
}

}
`;

    const LabelStyled = styled.label`
    
    
    @media (min-width: 768px) {
    
    font-size: 25px;
    
    }
    
    @media (min-width: 1024px) {
    
    font-size: 15px;
    
    }
    
    `;

    const ContactDivInnerStyled = styled.div`
    
    width: 100%;
    margin-top: 30px;
    
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-self: center;
    
    `;

    const SocialButtonStyled = styled.button`
    
    width: 30px;
    height: 30px;
    background: transparent;
    border: none;
    
    `;

    const FacebookIconStyled = styled.i`
.gg-facebook {
    box-sizing: border-box;
    position: relative;
    display: block;
    transform: scale(var(--ggs,1));
    width: 20px;
    height: 20px
    color: #000000;
}
.gg-facebook::after,
.gg-facebook::before {
    content: "";
    display: block;
    position: absolute;
    box-sizing: border-box
}
.gg-facebook::before {
    width: 8px;
    height: 20px;
    border-left: 4px solid;
    border-top: 4px solid;
    border-top-left-radius: 5px;
    left: 6px
}
.gg-facebook::after {
    width: 10px;
    height: 4px;
    background: currentColor;
    top: 7px;
    left: 4px;
    transform: skew(-5deg)
}
    `;


    const InstagramIconStyled = styled.i`
    .gg-instagram {
    box-sizing: border-box;
    position: relative;
    display: block;
    transform: scale(var(--ggs,1));
    border: 2px solid transparent;
    box-shadow: 0 0 0 2px;
    border-radius: 5px;
    width: 20px;
    height: 20px;
    color: #000000;
}
.gg-instagram::after,
.gg-instagram::before {
    content: "";
    display: block;
    box-sizing: border-box;
    position: absolute
}
.gg-instagram::after {
    border: 2px solid;
    left: 4px;
    width: 10px;
    height: 10px;
    border-radius: 100%;
    top: 4px
}
.gg-instagram::before {
    border-radius: 3px;
    width: 2px;
    height: 2px;
    background: currentColor;
    right: 1px;
    top: 1px
}
    `;

    const handleFBSubmit = (e) => {
        e.preventDefault();
        window.open(facebookUrl,'_blank')
    }

    const handleIGSubmit = (e) => {
        e.preventDefault();
        window.open(instagramUrl,'_blank')
    }

    const facebookUrl = 'https://www.facebook.com/hajzeer/';
    const instagramUrl = 'https://www.instagram.com/krzysiuhajder/';

    return (
        <ContactFormStyled className="contact">
            <BackgroundDiv/>
            <ContactFormInner className="contact__inner" >
                <InputStyle type="hidden" name="contact__number"/>
                <LabelStyled>Name</LabelStyled>
                <InputStyle type="text" name="user__name"/>
                <LabelStyled>Email</LabelStyled>
                <InputStyle type="email" name="user__email"/>
                <LabelStyled>Subject</LabelStyled>
                <InputStyle type="subject" name="subject"/>
                <LabelStyled>Message</LabelStyled>
                <TextAreaStyle type="text" name="message"/>
                <SendButtonStyle >Send</SendButtonStyle>
                <ContactDivInnerStyled>
                    <SocialButtonStyled onClick={handleFBSubmit}>
                        <FacebookIconStyled className="gg-facebook"></FacebookIconStyled>
                    </SocialButtonStyled>
                    <SocialButtonStyled onClick={handleIGSubmit}>
                        <InstagramIconStyled className="gg-instagram"></InstagramIconStyled>
                    </SocialButtonStyled>
                </ContactDivInnerStyled>
            </ContactFormInner>
        </ContactFormStyled>

    )
}
export default ContactForm;
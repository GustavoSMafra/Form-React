import '../Styles/Form.scss'
import { AiOutlineArrowRight, AiOutlineArrowLeft } from 'react-icons/ai'

function Form(props) {

    const title = {
        0: "Introduction",
        1: "Personal Data",
        2: "Contact",
        3: "Service"
    }

    return (
        <div className='FormContainer'>
            <div className='FormTitle'>
                <h1>{title[props.stage]}</h1>
            </div>
            <div className='FormInputs'>

            </div>
            <div className='FormFooter'>
                <span className={`FormFooterBack ${props.stage === 0}`} onClick={() =>  props.stage !== 0 ? props.setStage(props.stage - 1) : null}>
                    <AiOutlineArrowLeft size={20} color={"#003153"} />
                    <p>Back</p>
                </span>
                <span className='FormFooterNext' onClick={() =>  props.stage !== 3 ? props.setStage(props.stage + 1) : null}>
                    <p>{props.stage === 3 ? "Create" : "Next"}</p>
                    <AiOutlineArrowRight size={20} color={"white"} />
                </span>
            </div>
        </div>
    );
}

export default Form;
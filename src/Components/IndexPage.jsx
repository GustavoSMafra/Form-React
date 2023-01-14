import { useState } from 'react';
import '../Styles/IndexPage.scss'
import Form from './Form.jsx'
import { AiFillCheckCircle, AiOutlineForm } from 'react-icons/ai'

function IndexPage() {

    const [stage, setStage] = useState(1)
    const [type, setType] = useState(0)

    return (
        <div className="IndexPageContainer">
            <div className="IndexPageHeader">
                <div className='IndexPageHeaderTitle'>
                    <AiOutlineForm size={30} color={"#003153"} />
                    <h1>Create an account</h1>
                </div>
                <div className="IndexPageHeaderStages">
                    <span>
                        {stage > 0 ? <AiFillCheckCircle size={26} color={"green"} /> : <p className="IndexPageHeaderStagesNumber">1</p>}
                        <p className={`IndexPageHeaderStagesText ${stage === 0}`}>Introduction</p>
                    </span>
                    <span>
                        {stage > 1 ? <AiFillCheckCircle size={26} color={"green"} /> : <p className="IndexPageHeaderStagesNumber">2</p>}
                        <p className={`IndexPageHeaderStagesText ${stage === 1}`}>Personal Data</p>
                    </span>
                    <span>
                        {stage > 2 ? <AiFillCheckCircle size={26} color={"green"} /> : <p className="IndexPageHeaderStagesNumber">3</p>}
                        <p className={`IndexPageHeaderStagesText ${stage === 2}`}>Contact</p>
                    </span>
                    <span>
                        {stage > 3 ? <AiFillCheckCircle size={26} color={"green"} /> : <p className="IndexPageHeaderStagesNumber">4</p>}
                        <p className={`IndexPageHeaderStagesText ${stage === 3}`}>Service</p>
                    </span>
                </div>
                <div className="IndexPageHeaderLogin">
                    <p className={`IndexPageHeaderLoginButton ${type === 0}`}>Login</p>
                    <p className={`IndexPageHeaderLoginButton ${type === 1}`}>Create an account</p>
                </div>
            </div>
            <main className="IndexPageMain">
                <Form stage={stage} setStage={setStage}/>
            </main>
        </div>
    );
}

export default IndexPage;
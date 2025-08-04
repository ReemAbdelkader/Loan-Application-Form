import './FormStyle.css';

export default function Model({isVisible}) {
    if (isVisible) {
        return (
            <div className='mainModel'>
                <div className='modelStyle'>
                    <h1>The Form Has Been Submitted Successfully</h1>
                </div>
            </div>
        );
    }
    else {
        return (<></>);
    }
}

import { useState } from 'react';
import Lottie from 'react-lottie';
import Title from '../Title/Title';
import Button from '../Button/Button';
import anim1 from '../../Lottie/lf30_editor_tgi0d90k.json'
import anim2 from '../../Lottie/lf30_editor_ok7hmzct.json'

export default function Loader() {
    const [loader, setLoader] = useState(anim1)
    const [loop, setLoop] = useState(true)

    setTimeout(() => {
        setLoop(!loop)
        setLoader(anim2)
    }, 4000)

    const [state, setState] = useState({
        isStopped: false,
        isPaused: false
    })

    const defaultOptions = {
        loop: loop,
        autoplay: true, 
        animationData: loader,
        rendererSettings: {
          preserveAspectRatio: 'xMidYMid slice'
        }
    };

    return(
        <div style={{padding: '1.5rem'}}>
            <div style={{marginBottom: '1.563rem'}}>
                <Title title='Survey...' />
            </div>
            <div style={{width: '300px', height: '300px', backgroundColor: '#E0FAF8', display: 'flex', alignItems: 'center', marginBottom: '4.55rem'}}>
                <Lottie options={defaultOptions}
                    height={150}
                    width={150}
                    isStopped={state.isStopped}
                    isPaused={state.isPaused}
                />
            </div>
            <div>
                <div style={{marginBottom: '1.5rem', width: '100%', position: 'relative'}}>
                    <Button bc='#82ECD3' />
                    <div style={{position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)'}}>
                        <svg width="49" height="9" viewBox="0 0 49 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="4.4" cy="4.4" r="4.4" fill="#006E72"/>
                            <circle cx="24.2008" cy="4.4" r="4.4" fill="#006E72"/>
                            <circle cx="44.0016" cy="4.4" r="4.4" fill="#006E72"/>
                        </svg> 
                    </div>
                </div>

                <div style={{textAlign: 'center', fontSize: '.75rem', fontWeight: 600}}>Read <span style={{color: '#82ecd3'}}>Instructions</span></div>
            </div>
        </div>
    )
}
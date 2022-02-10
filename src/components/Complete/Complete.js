import Title from '../Title/Title';
import Button from '../Button/Button';

export default function Complete({setState}) {
    return(
        <div style={{padding: '1.5rem'}}>
            <div style={{marginBottom: '1.563rem'}}>
                <Title title='Survey complete!' />
            </div>
            <div style={{width: '289px', height: '161px', backgroundColor: '#E0FAF8', display: 'flex', alignItems: 'center', marginBottom: '6.75rem'}}>
                <svg width="289" height="161" viewBox="0 0 289 161" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="0.4" y="0.4" width="288.2" height="160.2" fill="#E0FAF8"/>
                    <path d="M120.655 125.058H96.811V129.811H120.655V125.058Z" fill="#006E72"/>
                    <path d="M103.622 37.9209H170.044L198.997 64.8546L170.044 91.7875H103.622V37.9209Z" fill="#17E7B3"/>
                    <path d="M146.201 80.6975C155.607 80.6975 163.232 73.6044 163.232 64.8546C163.232 56.1048 155.607 49.0118 146.201 49.0118C136.795 49.0118 129.17 56.1048 129.17 64.8546C129.17 73.6044 136.795 80.6975 146.201 80.6975Z" fill="#E0FAF8"/>
                    <path d="M117.251 63.2705H120.657V66.4391H117.251V63.2705Z" fill="white"/>
                    <path d="M117.251 56.9331H120.657V60.1017H117.251V56.9331Z" fill="white"/>
                    <path d="M117.251 69.6075H120.657V72.7761H117.251V69.6075Z" fill="white"/>
                    <path d="M110.44 125.058V91.7879H113.847V125.058H110.44Z" fill="#003333"/>
                    <path d="M110.434 37.921V34.753C110.434 34.3152 110.243 33.9189 109.935 33.6326L109.871 33.569C109.573 33.3204 109.174 33.1685 108.733 33.1685C108.262 33.1685 107.835 33.3463 107.527 33.6326L107.462 33.6901C107.193 33.9702 107.028 34.344 107.028 34.753V125.058H103.622V34.753C103.622 33.4961 104.151 32.3511 105.012 31.5009L105.119 31.3919C106.043 30.5322 107.321 30 108.732 30C110.08 30 111.309 30.4911 112.225 31.2913L112.344 31.3919C113.268 32.2519 113.841 33.4403 113.841 34.7518V37.9212H110.434V37.921Z" fill="#003333"/>
                    <path d="M110.44 85.451V44.2591H113.847V85.451H110.44Z" fill="#003333"/>
                    <path d="M155.925 61.222L145.706 70.7279C145.041 71.3464 143.962 71.3464 143.297 70.7279L136.485 64.3908L138.894 62.1503L144.502 67.3668L153.516 58.9816L155.925 61.2222V61.222Z" fill="#006E72"/>
                    <path d="M199 131.395H90V128.227H199V131.395Z" fill="#003333"/>
                    <rect x="0.4" y="0.4" width="288.2" height="160.2" stroke="#82ECD3" stroke-width="0.8"/>
                </svg>
            </div>
            <h1 style={{fontSize: '1.094rem', fontWeight: 800, textAlign: 'center', marginBottom: '4.938rem'}}>
                Thanks for your time!
            </h1>
            <div>
                <div style={{marginBottom: '1.5rem', width: '100%', position: 'relative'}}>
                    <Button 
                        name='Continue' 
                        onClick={() => setState(4)}
                    />
                    <div style={{position: 'absolute', top: '50%', left: '262px', transform: 'translate(-50%, -50%)'}}>
                        <svg width="9" height="13" viewBox="0 0 9 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M7.71314 7.48913L2.46083 12.5664C2.12646 12.8896 1.58514 12.8896 1.25077 12.5664C0.916408 12.2431 0.916408 11.7199 1.25077 11.3971L5.89876 6.90451L1.25077 2.41189C0.916882 2.08867 0.916882 1.56539 1.25077 1.24217C1.58514 0.918951 2.12646 0.918951 2.46083 1.24217L7.71361 6.31985C7.88032 6.48101 7.96368 6.69251 7.96368 6.90402C7.96368 7.11599 7.87985 7.32752 7.71314 7.48913Z" fill="white" stroke="white" stroke-width="0.0762086" stroke-miterlimit="22.9256"/>
                        </svg>
                    </div>
                </div>

                <div style={{textAlign: 'center', fontSize: '.75rem', fontWeight: 600}}>Read <span style={{color: '#82ecd3'}}>Instructions</span></div>
            </div>
        </div>
    )
}
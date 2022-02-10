import Title from '../Title/Title';
import Button from '../Button/Button';

export default function Complete({setState}) {
    return(
        <div style={{padding: '1.5rem'}}>
            <div style={{marginBottom: '1.563rem'}}>
                <Title title='Survey complete!' />
            </div>
            <div style={{width: '100%', height: '161px', backgroundColor: '#E0FAF8', display: 'flex', justifyContent: 'center', alignItems: 'center', marginBottom: '6.75rem', border: '0.8px solid #82ECD3'}}>
                <svg width="109" height="102" viewBox="0 0 109 102" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M30.6549 95.0576H6.81097V99.8108H30.6549V95.0576Z" fill="#006E72"/>
                <path d="M13.622 7.92089H80.0438L108.997 34.8546L80.0438 61.7875H13.622V7.92089Z" fill="#17E7B3"/>
                <path d="M56.201 50.6975C65.607 50.6975 73.2321 43.6044 73.2321 34.8546C73.2321 26.1048 65.607 19.0118 56.201 19.0118C46.7951 19.0118 39.17 26.1048 39.17 34.8546C39.17 43.6044 46.7951 50.6975 56.201 50.6975Z" fill="#E0FAF8"/>
                <path d="M27.2508 33.2705H30.6565V36.4391H27.2508V33.2705Z" fill="white"/>
                <path d="M27.2508 26.9331H30.6565V30.1017H27.2508V26.9331Z" fill="white"/>
                <path d="M27.2508 39.6075H30.6565V42.7761H27.2508V39.6075Z" fill="white"/>
                <path d="M20.4398 95.058V61.7879H23.8466V95.058H20.4398Z" fill="#003333"/>
                <path d="M20.4342 7.92103V4.75297C20.4342 4.31517 20.243 3.91889 19.9352 3.63259L19.8709 3.56896C19.5733 3.32035 19.174 3.16846 18.7329 3.16846C18.2616 3.16846 17.8348 3.3463 17.5272 3.63259L17.4623 3.69009C17.193 3.97023 17.0283 4.34401 17.0283 4.75297V95.0577H13.622V4.75297C13.622 3.49609 14.1509 2.3511 15.0116 1.50087L15.1187 1.39185C16.0428 0.532203 17.3214 0 18.7316 0C20.0797 0 21.3091 0.491066 22.2249 1.2913L22.3442 1.39185C23.2684 2.25189 23.8409 3.44032 23.8409 4.75181V7.92122H20.4342V7.92103Z" fill="#003333"/>
                <path d="M20.4398 55.451V14.2591H23.8466V55.451H20.4398Z" fill="#003333"/>
                <path d="M65.925 31.222L55.706 40.7279C55.0411 41.3464 53.9624 41.3464 53.2974 40.7279L46.485 34.3908L48.8937 32.1503L54.5019 37.3668L63.516 28.9816L65.925 31.2222V31.222Z" fill="#006E72"/>
                <path d="M109 101.395H0V98.2267H109V101.395Z" fill="#003333"/>
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
                            <path d="M7.71314 7.48913L2.46083 12.5664C2.12646 12.8896 1.58514 12.8896 1.25077 12.5664C0.916408 12.2431 0.916408 11.7199 1.25077 11.3971L5.89876 6.90451L1.25077 2.41189C0.916882 2.08867 0.916882 1.56539 1.25077 1.24217C1.58514 0.918951 2.12646 0.918951 2.46083 1.24217L7.71361 6.31985C7.88032 6.48101 7.96368 6.69251 7.96368 6.90402C7.96368 7.11599 7.87985 7.32752 7.71314 7.48913Z" fill="white" stroke="white" strokeWidth="0.0762086" strokeMiterlimit="22.9256"/>
                        </svg>
                    </div>
                </div>

                <div style={{textAlign: 'center', fontSize: '.75rem', fontWeight: 600}}>Read <span style={{color: '#82ecd3'}}>Instructions</span></div>
            </div>
        </div>
    )
}
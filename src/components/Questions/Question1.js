import Button from "../Button/Button";
import Title from "../Title/Title";

export default function Question1({load}) {
    return(
        <div style={{position: 'relative'}}>
            <div style={{padding: '1.5rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between'}}>
                <Title
                    title='Survey'
                />
                <div style={{display: 'flex', alignItems: 'center', color: '#006E72'}}>
                    <div style={{marginRight: '.375rem'}}>Skip</div>
                    <div>
                        <svg width="7" height="10" viewBox="0 0 7 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M6.40816 5.42789L2.17686 9.51815C1.90749 9.77854 1.47139 9.77854 1.20203 9.51815C0.932658 9.25776 0.932658 8.83619 1.20203 8.57617L4.94648 4.95692L1.20203 1.33762C0.93304 1.07724 0.93304 0.655678 1.20203 0.395289C1.47139 0.1349 1.90749 0.1349 2.17686 0.395289L6.40854 4.48591C6.54284 4.61574 6.61 4.78612 6.61 4.95652C6.61 5.12729 6.54247 5.29769 6.40816 5.42789Z" fill="#006E72" stroke="#006E72" stroke-width="0.3" stroke-miterlimit="22.9256"/>
                        </svg>
                    </div>
                </div>
            </div>

            <div style={{padding: '0 .5rem', display: 'flex', fontSize: '0.969rem', fontWeight: 800, marginBottom: '2.5rem', lineHeight: '1.614rem'}}>
                <div style={{marginRight: '.5rem'}}>13.</div>
                <div>Add an attachment that reflects and portrays similar features and characteristics with the image shown below.</div>
            </div>
            
            <div style={{display: 'flex', marginLeft: '2rem'}}>
                <img src='/images/112.png' width='124px' height='130px' alt='image' style={{marginRight: '1rem'}} />
                <img src='/images/113.png' width='124px' height='130px' alt='image' style={{marginRight: '1rem'}} />
                <img src='/images/114.png' width='124px' height='130px' alt='image' />
            </div>

            <div style={{display: 'flex' , alignItems: 'center', color: '#82ECD3', padding: '1.438rem 2rem'}}>
                <div style={{marginRight: '.5rem'}}>
                    <img src='/images/Vector.png' alt='icon' />
                </div>
                <div>
                    Add Attachments
                </div>
            </div>

            <div style={{padding: '0 1.5rem', marginBottom: '1.5rem', position: 'relative'}}>
                <Button 
                    name='Finish' 
                    onClick={() => load()}
                />
                <div style={{position: 'absolute', top: '50%', left: '282px', transform: 'translate(-50%, -50%)'}}>
                    <svg width="9" height="13" viewBox="0 0 9 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M7.71314 7.48913L2.46083 12.5664C2.12646 12.8896 1.58514 12.8896 1.25077 12.5664C0.916408 12.2431 0.916408 11.7199 1.25077 11.3971L5.89876 6.90451L1.25077 2.41189C0.916882 2.08867 0.916882 1.56539 1.25077 1.24217C1.58514 0.918951 2.12646 0.918951 2.46083 1.24217L7.71361 6.31985C7.88032 6.48101 7.96368 6.69251 7.96368 6.90402C7.96368 7.11599 7.87985 7.32752 7.71314 7.48913Z" fill="white" stroke="white" stroke-width="0.0762086" stroke-miterlimit="22.9256"/>
                    </svg>
                </div>
            </div>

            <div style={{textAlign: 'center', fontSize: '.75rem', fontWeight: 600}}>Read <span style={{color: '#82ecd3'}}>Instructions</span></div>
            
            <div style={{display: 'flex', alignItems: 'center', position: 'absolute', marginLeft: 'auto', width: 'max-content', right: 0, top: 0}}>
                <div style={{marginRight: '1rem'}}>
                    <svg width="34" height="4" viewBox="0 0 34 4" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect width="34" height="4" fill="#17E7B3"/>
                    </svg>
                </div>
                <div style={{marginRight: '1rem'}}>
                    <svg width="34" height="4" viewBox="0 0 34 4" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect width="34" height="4" fill="#006E72"/>
                    </svg>
                </div>
                <div style={{marginRight: '1rem'}}>
                    <svg width="34" height="4" viewBox="0 0 34 4" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect width="34" height="4" fill="#C6F6F2"/>
                    </svg>
                </div>
                <div style={{marginRight: '1rem'}}>
                    <svg width="34" height="4" viewBox="0 0 34 4" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect width="34" height="4" fill="#C8F6F3"/>
                    </svg>
                </div>
            </div>
        </div>
    )
}
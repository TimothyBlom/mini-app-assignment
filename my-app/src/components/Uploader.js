import React, {useState, useRef} from 'react';


const Uploader = () => {
    const [image, setImage] = useState({imagePreview: ''});
    const [name, setName] = useState({namePreview: ''});
    const [time, setTime] = useState({timeHourPreview: '', timeMinutePreview: ''});

    const handleChange = (event) => {
        setImage({
            imagePreview: URL.createObjectURL(event.target.files[0])
        })
        setName({
            namePreview: "Naam afbeelding:     " + event.target.files[0].name
        })
        setTime({
            timeHourPreview: new Date().getHours() + ":" ,
            timeMinutePreview: new Date().getMinutes()
        })
    }

    return (
        <div>

            <h1>Afbeelding Uploaden</h1>

            <form className="uploadInput">
                <input className='chooseFile' useRef='fileInput' type="file" onChange={handleChange}/>
                <input className='submitFile button' type='submit' value='Upload afbeelding' />
            </form>

            <br />

            <label>
                <div className='uploadPreviewContainer'>
                    <img className='uploaderImage' src={image.imagePreview} alt='' />
                    <h3 className='uploaderName'>{name.namePreview}</h3>
                    <div className='uploaderTime'>
                        <h3 className='uploaderHour'>{time.timeHourPreview}</h3>
                        <h3 className='uploaderMinute'>{time.timeMinutePreview}</h3>
                    </div>
                </div>
            </label>
        </div>
    );
}

export default Uploader;
import React, {useState} from 'react';


const Uploader = () => {
    const [image, setImage] = useState({imagePreview: ''});
    const [name, setName] = useState({namePreview: ''})

    const handleChange = (event) => {
        setImage({
            imagePreview: URL.createObjectURL(event.target.files[0])
        })
        setName({
            namePreview: event.target.files[0].name
        })
    }

    return (
        <div>

            <input type="file" id="upload-button" onChange={handleChange} />

            <br />

            <label htmlFor="upload-button">
                <img src={image.imagePreview} className='imagePreview'/>
                <h1>{name.namePreview}</h1>
            </label>
        </div>
    );
}

export default Uploader;
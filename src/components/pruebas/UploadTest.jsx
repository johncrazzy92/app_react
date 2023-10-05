import { useEffect } from 'react'
import { useState } from 'react'


const UploadTest = () => {
    const [imgUp, setImgUp] = useState(null)

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const extensions = ["png", "jpeg", "jpg"];
            let hasInvalidExtension = false;
            Array.from(imgUp).forEach((file) => {

                const fileExtension = file.name.split(".").pop().toLowerCase();

                if (!extensions.includes(fileExtension)) {

                    hasInvalidExtension = true;
                }
            });
            const formData = new FormData();

            
            if (hasInvalidExtension) {
                setImgUp(null)
            throw new Error("invalid extension")
            }
            for (const img of imgUp) {
                            formData.append('pages', img);
                        }


           return 
    
        } catch (error) {
            console.log(error.message);
        }
    }
    
useEffect(() => {
    console.log(imgUp);
}, [imgUp]);

    return (
    <form  onSubmit={handleSubmit}>
        <div className='flex'>

        <label className="cursor-pointer bg-orange-600 rounded-md w-28 flex justify-center items-center text-white h-8">
            Upload img
        <input type="file" value="" accept='.png,.jpeg,.jpg' multiple id='' style={{ display: "none" }} onChange={ e => { 
            setImgUp([...e.target.files])
            console.log(imgUp);} } />
        </label>    
        {imgUp ? (
            <p className='flex justify-center items-center'>{imgUp?.length} archivo(s) seleccionado(s)</p>
            ) : (
                <p className='flex justify-center items-center'>Ningún archivo seleccionado</p>
                )}
                </div>
        <button>upload</button>
    </form>
  )
}

export default UploadTest
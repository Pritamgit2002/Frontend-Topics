interface AritraOneProps{
    formData: any,
    addData: (data:{name:string}) => void,
    handleNext: Function
}

export const ArtitraOne: React.FC<AritraOneProps> = ({formData,addData,handleNext}) => {

    const onNext = (e: React.FormEvent) =>{
        e.preventDefault();
        // addData(e.target.addEventListener);
        addData({name:`name`})
        handleNext();
    }
    
    return (
        <form onSubmit={onNext}>
            <div>
                <label htmlFor="name">Name : </label>
                <input type="text" id="name" name="name" placeholder="Enter your name" />   
            </div>
            <button type="submit">Next</button>
        </form>
    )
}
interface AritraTwoProps{
    formData: any,
    addData: (data:{address:string}) => void,
    handlePrev:Function
    handleNext: Function
}
export const AritraTwo: React.FC<AritraTwoProps> = ({formData,addData,handlePrev,handleNext}) => {
    const onNext = (e:React.FormEvent) =>{
        e.preventDefault;
        addData(e.target.addEventListener);
        handlePrev();
        handleNext();
    }
    return (
        <form onSubmit={onNext}>
            <button type="submit">Prev</button>
            <div>
                <label htmlFor="address">Address : </label>
                <input type="text" id="address" name="address" placeholder="Enter your address" />
            </div>
            <button type="submit">Next</button>
        </form>
    )
}
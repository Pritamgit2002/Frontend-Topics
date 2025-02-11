interface AritraThreeProps{
    formData: any,
    addData: (data:{email:string}) => void,
    handlePrev:Function
    handleSubmit: Function
    
}
export const AritraThree: React.FC<AritraThreeProps> = ({formData,addData,handlePrev,handleSubmit}) => {

    const onSubmit = (e:React.FormEvent) =>{
        e.preventDefault();
        addData()
        handlePrev()
        handleSubmit()
    }
    
    return (
        <form onSubmit={onSubmit}>
            <div>
                <label htmlFor="email">Email : </label>
                <input type="text" id="email" name="email" placeholder="Enter your email" />
            </div>
            <button type="submit">Submit</button>
        </form>
    )
}
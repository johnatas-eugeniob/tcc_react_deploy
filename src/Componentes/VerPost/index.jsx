import './style.css'

function VerPost() {
    return(
        <div className="divForms">
            <form action="" method="post">
                <label htmlFor="pergunta1">Form com resposta:</label>
                <input type="text" name="pergunta1"/><br/>
                <label htmlFor="pergunta1">Form com resposta 2:</label>
                <input type="text" name="pergunta2"/><br/>
                <label htmlFor="pergunta1">Form com resposta 3:</label>
                <input type="text" name="pergunta3"/>
            </form>
        </div>
    )
}
export default VerPost
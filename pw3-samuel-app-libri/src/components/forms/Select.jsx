import styles from './Select.module.css'
function Select({name, text, options}) {
    return(
        <div className={styles.form_control}>
            <label htmlFor={name}>{text}</label>
            <select name={name} id={name}>

                <option>Selecione uma categoria</option>

                {
                    options.map((option)=>{
                        // console.log(option.cod_categoria + ' - ' + option.nome_categoria)
                        return <option>{option.nome_categoria}</option>
                    })
                }

            </select>
        </div>
    )
}
export default Select
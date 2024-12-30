function ProjectsForm() {
    return(
        <div>
            <form>
                <div>
                    <input type='text' placeholder='Insira o nome do projeto' />
                </div>

                <div>
                    <input type='number' placeholder='Insira orçamento total' />
                </div>

                <div>
                    <select name='category_id'>
                        <option disabled select>Selecione a categoria</option>
                    </select>
                </div>

                <div>
                    <input type='submit' value='Criar projeto'/>
                </div>
            </form>
        </div>
    )
}

export default ProjectsForm
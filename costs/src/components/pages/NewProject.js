import ProjectsForm from '../project/ProjectsForm';
import styles from './NewProject.module.css'

function NewProject() {
    return (
        <div className={styles.newproject_container}>
            <h1>Criar Projeto</h1>
            <p>Crie seu projeto para depois adicionar os serviços</p>   
            <ProjectsForm btnText="Criar projeto"/>
        </div>
    )
};

export default NewProject;
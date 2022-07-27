<template>
    <section id="counts" class="counts">
        <div class="container" data-aos="fade-up">

            <div class="row">

                <div class="col-lg-3 col-md-6">
                    <div class="count-box">
                        <i class="fa fa-users"></i>
                        <span data-purecounter-start="0" :data-purecounter-end="cantClients" data-purecounter-duration="1"
                            class="purecounter">0</span>
                        <p>Clientes Felices</p>
                    </div>
                </div>

                <div class="col-lg-3 col-md-6 mt-5 mt-md-0">
                    <div class="count-box">
                        <i class="fa fa-folder-open"></i>
                        <span data-purecounter-start="0" :data-purecounter-end="cantProjects" data-purecounter-duration="1"
                            class="purecounter">0</span>
                        <p>Proyectos</p>
                    </div>
                </div>

                <div class="col-lg-3 col-md-6 mt-5 mt-lg-0">
                    <div class="count-box">
                        <i class="fa fa-calendar"></i>
                        <span data-purecounter-start="0" :data-purecounter-end="cantYears" data-purecounter-duration="1"
                            class="purecounter">0</span>
                        <p>Años de Experiencia</p>
                    </div>
                </div>

                <div class="col-lg-3 col-md-6 mt-5 mt-lg-0">
                    <div class="count-box">
                        <i class="fa fa-user"></i>
                        <span data-purecounter-start="0" :data-purecounter-end="cantTeam" data-purecounter-duration="1"
                            class="purecounter">0</span>
                        <p>Miembros del Equipo</p>
                    </div>
                </div>

            </div>

        </div>
    </section>
</template>

<script>
import clients from '../../data/clients.json';
import projects from '../../data/projects.json';
import team from '../../data/team.json'

export default {
    data(){
        return{
            cantClients: clients.length,
            cantProjects: projects.length,
            cantYears: (new Date()).getFullYear() - 2019,
            cantTeam: team.length
        }
    }
}
</script>

<style>
</style>
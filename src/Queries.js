import execAllViz from "./carrotsearch/oldSite/lib/d3SOBr.js";

import jquery from  "./carrotsearch/oldSite/lib/jquery/jquery.min.js"
import d3 from "./carrotsearch/oldSite/lib/d3/d3.v3.min.js"
import d3SOBr from "./carrotsearch/oldSite/lib/d3SOBr.js"
import d3sparql from "./carrotsearch/oldSite/d3sparql.js"
 
export default function Queries() {
    return (
        <div className="Queries">





            
            <script>
                $( document ).ready(function() {

                    execAllViz(getAllPageParams())
                });

            </script>





            <p>Escolha a origem dos dados:
                <select id="selectEstado" onchange="toggleMunicipio()">
                    <option value="SP">
                        Estado de São Paulo
                    </option>
                    <option value="Federal">
                        Receitas e despesas do Governo Federal
                    </option>
                </select>
            </p>
            <p>Escolha um município:
                <select id="selectMunicipio">
                    <option value="todos">Todos
                    </option>
                </select>
            </p>
        </div>
    );
}
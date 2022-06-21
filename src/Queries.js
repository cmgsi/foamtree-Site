
 
export default function Queries() {
    return (
        <div className="Queries">





            
            <script>
                $( document ).ready(function() {

                 
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
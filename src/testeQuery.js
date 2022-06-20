import SparqlEndpointFetcher from "fetch-sparql-endpoint";

export default function Teste() {
  const myFetcher = new SparqlEndpointFetcher();

  //const myFetcher = new SparqlEndpointFetcher({
  //    method: 'POST',                           // A custom HTTP method for issuing (non-update) queries, defaults to POST. Update queries are always issued via POST.
  //    additionalUrlParams: new URLSearchParams({ 'infer': 'true', 'sameAs': 'false' });  // A set of additional parameters that well be added to fetchAsk, fetchBindings & fetchTriples requests
  //    fetch: fetch,                             // A custom fetch-API-supporting function
  //    dataFactory: DataFactory,                 // A custom RDFJS data factory
  //    prefixVariableQuestionMark: false         // If variable names in bindings should be prefixed with '?', defaults to false
  //});

  (async () => {
    const bindingsStream = await myFetcher.fetchBindings(
      "https://dbpedia.org/sparql",
      "SELECT * WHERE { ?s ?p ?o } LIMIT 100"
    );
    bindingsStream.on("data", (bindings) => console.log(bindings));
  })();




  import "./styles.css";
import "./Teste";

export default function App() {
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <div className="Testes">
        <Teste />
      </div>
    </div>
  );
}

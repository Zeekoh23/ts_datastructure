class Graph<T> {
  numberOfNodes: number;
  adjacentList: object;

  constructor() {
    this.numberOfNodes = 0;
    this.adjacentList = {};
  }

  addVertex(node: T) {
    (this.adjacentList as any)[node] = []; //using a hashtable or an object
    this.numberOfNodes++;
  }
  addEdge(node1: T, node2: T) {
    //undirected graph
    (this.adjacentList as any)[node1].push(node2);
    (this.adjacentList as any)[node2].push(node1);
  }

  showConnections() {
    const allNodes = Object.keys(this.adjacentList);
    for (let node of allNodes) {
      let nodeConnections = (this.adjacentList as any)[node];
      let connections = "";
      let vertex;
      for (vertex of nodeConnections) {
        connections += vertex + " ";
      }
      console.log(node + "-->" + connections);
    }
  }
}

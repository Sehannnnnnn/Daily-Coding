class BinarySearchTree {
    constructor(value) {
          // constructor로 만든 객체는 이진 탐색 트리의 Node가 됩니다.
      this.value = value;
      this.left = null;
      this.right = null;
    }
  
      // 이진 탐색 트리의 삽입하는 메서드를 만듭니다.
    insert(value) {
          // 입력값을 기준으로, 현재 노드의 값보다 크거나 작은 것에 대한 조건문이 있어야 합니다.
          // 보다 작다면, Node의 왼쪽이 비어 있는지 확인 후 값을 넣습니다.
      if (value < this.value) {
        if (this.left === null) {
          this.left = new BinarySearchTree(value);
        } else {
                  // TODO: 비어 있지 않다면 해당 노드로 이동하여 처음부터 다시 크거나 작은 것에 대한 조건을 물어보아야 할 것입니다.
                  // TIP: 재귀함수를 사용합니다.
          return this.left.insert(value);
        }
          // 보다 크다면, Node의 오른쪽이 비어 있는지 확인 후 값을 넣습니다.
      } else if (value > this.value) {
        if (this.right === null) {
          this.right = new BinarySearchTree(value);
        } else {
                  // TODO: 비어 있지 않다면 해당 노드로 이동하여 처음부터 다시 크거나 작은 것에 대한 조건을 물어보아야 할 것입니다.
                  // TIP: 재귀함수를 사용합니다.
          return this.right.insert(value);
        }
          //그것도 아니라면, 입력값이 트리에 들어 있는 경우입니다.
      } else {
        // 아무것도 하지 않습니다.
        return;
      }
    }
    // 앞서 구현했던 트리에 비해 이진 탐색 트리는 입력값과 트리 노드의 값의 크기를 비교하고 있습니다. 왜 그런 것일까요?
  
      // 이진 탐색 트리 안에 해당 값이 포함되어 있는지 확인하는 메서드를 만듭니다.
    contains(value) {
          // TODO: 값이 포함되어 있다면 true를 반환하세요.
      if (this.value === value) {
        return true;
      }
          // 입력값을 기준으로 현재 노드의 값보다 작은지 판별하는 조건문이 있어야 합니다.
      if (value < this.value) {
              // TODO: 현재 노드의 왼쪽이 비어 있지 않고, 노드의 값이 입력값과 일치하면 true를 반환합니다.
              if (!this.left) {return false} 
              // TODO:일치하지 않다면 왼쪽 노드로 이동하여 다시 탐색합니다. 
        else {return this.left.contains(value)};
      }
          // 입력값을 기준으로 현재 노드의 값보다 큰지 판별하는 조건문이 있어야 합니다.
      if (value > this.value) {
              // TODO: 현재 노드의 오른쪽이 비어 있지 않고, 노드의 값이 입력값과 일치하면 true를 반환합니다.
              if (!this.right) {return false}
              // TODO:일치하지 않다면 오른쪽 노드로 이동하여 다시 탐색합니다. 
        else {return this.right.contains(value)};
      }
    }
  
      /*
      트리의 순회에 대해 구현을 합니다.
    지금 만드려고 하는 이 순회 메서드는 단지 순회만 하는 것이 아닌, 함수를 매개변수로 받아 콜백 함수에 값을 적용시킨 것을 순회해야 합니다.
    전위 순회를 통해 어떻게 탐색하는지 이해를 한다면 중위와 후위 순회는 쉽게 다가올 것입니다.
      */
  
      // 이진 탐색 트리를 전위 순회하는 메서드를 만듭니다.
    preorder(callback) {
          callback(this.value);
      if (this.left) {
        this.left.preorder(callback);
      };
      if (this.right) {
        this.right.preorder(callback);class GraphWithAdjacencyList {
	constructor() {
		this.vertices = {};
	}

	addVertex(vertex) {
		// TODO: 정점을 추가합니다.
		// 넘겨받은 인자(정점)은 키가 되며, 빈 배열을 값으로 할당합니다.
		// 이미 존재하는 정점이라면, 덮어 씌워지지 않아야 합니다.
    if (!this.contains(vertex)) {
       this.vertices[vertex] = []; 
    }
	}

	contains(vertex) {
		// 인자로 넘겨받은 정점의 존재여부를 반환합니다.
		return !!this.vertices[vertex];
	}

	addEdge(fromVertex, toVertex) {
		// TODO: 간선을 추가합니다.
		// - fromVertex의 인접 리스트에 toVertex를 추가하고
		// - toVertex의 인접 리스트에 fromVertex를 추가합니다.
		// 넘겨받은 2개의 정점 모두 존재하는 정점이어야 합니다.

		if (!this.contains(fromVertex) || !this.contains(toVertex)) {
			return;
		}

		if (!this.hasEdge(fromVertex, toVertex)) {
		  this.vertices[fromVertex].push(toVertex);
    }

		if (!this.hasEdge(toVertex, fromVertex)) {
      this.vertices[toVertex].push(fromVertex);
		}
	}

	hasEdge(fromVertex, toVertex) {
		// 만약 정점(fromVertex)이 존재하지 않는다면
		if (!this.contains(fromVertex)) {
			// false를 반환합니다
			return false;
		}
		// 존재한다면 해당 정점의 리스트에 toVertex가 포함되어있는지 반환합니다
		return !!this.vertices[fromVertex].includes(toVertex);
	}

	removeEdge(fromVertex, toVertex) {
		// TODO: 간선을 삭제합니다.
		// 인자로 넘겨받은 두 정점이 모두 존재한다면
		// - fromVertex의 인접 리스트에 있는 toVertex를 삭제하고
		// - toVertex의 인접 리스트에 있는 fromVertex를 삭제합니다.

		if (!this.contains(fromVertex) || !this.contains(toVertex)) {
			return;
		}

		if (this.hasEdge(fromVertex, toVertex)) {
			const index = this.vertices[fromVertex].indexOf(toVertex);
			this.vertices[fromVertex].splice(index, 1);
		}
		// TODO:  두번째 정점의 인접 리스트에 첫번째 정점이 있을 경우
    if (this.hasEdge(toVertex, fromVertex)) {
			const index = this.vertices[toVertex].indexOf(fromVertex);
			this.vertices[toVertex].splice(index, 1);
		}
	}

	removeVertex(vertex) {
		// TODO: 정점을 삭제합니다.
		// 인자로 넘겨받은 정점(A)이 존재한다면
		// - 이 정점(A)을 삭제함은 물론,
		// - 다른 모든 정점들의 리스트를 순회하며 넘겨받은 정점(A)과 이어져 있는 간선을 제거합니다
		if (this.contains(vertex)) {
      delete this.vertices[vertex];
		}
    for (let [vert, edges] of Object.entries(this.vertices)) {
      this.vertices[vert] = edges.filter(vert => vert != vertex)
    }
	}
}
      };
    }
  
      // 이진 탐색 트리를 중위 순회하는 메서드를 만듭니다.
    inorder(callback) {
          //TODO: 전위 순회를 바탕으로 중위 순회를 구현하세요.
      if (this.left) {
        this.left.inorder(callback);
      }
      callback(this.value);
      if (this.right) {
        this.right.inorder(callback);
      }
    }
  
      // 이진 탐색 트리를 후위 순회하는 메서드를 만듭니다.
    postorder(callback) {
          //TODO: 전위 순회를 바탕으로 후위 순회를 구현하세요.
      if (this.left) {
        this.left.postorder(callback);
      }
      if (this.right) {
        this.right.postorder(callback);
      }
      callback(this.value);
    }
  }
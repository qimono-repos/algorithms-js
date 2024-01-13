console.log("Leet Code in JS");


class FiniteStateMachine {
  constructor() {
    this.states = {
      currentState: null, //"Pending", //null , //q0
      finalState: "Complete", //q1
      inicialState: "Pending", //q0
    };
    this.transition = {
      delta: (input, state = this.states.inicialState) => {
        console.log("input from delta", input);
        if (input.length === 0) return;
        //let currentInput = input.shift()//TODO implement more efficient approach if it is easy to convert to othjer languages
        let currentInput = input[0];
        input = input.slice(1); //, input.length)
        let mapping = this.transition.mapping(state);
        this.states.currentState = mapping.get(currentInput);
        this.transition.delta(input, this.states.currentState);
      },
      mapping: (state) => {
        let stateMap = new Map();
        stateMap.set(
          "Pending",
          new Map([
            ["0", "Pending"],
            ["1", "On Hold"],
            ["2", "Processing"],
            ["3", "Cancelled"],
          ])
        );
        stateMap.set(
          "On Hold",
          new Map([
            ["0", "On Hold"],
            ["1", "Processing"],
            ["2", "Cancelled"],
            ["3", "Complete"],
            ["4", "Closed"],
            ["5", "Payment Review"],
            ["6", "Pending Payment"],
          ])
        );
        stateMap.set(
          "Processing",
          new Map([
            ["0", "On Hold"],
            ["1", "Cancelled"],
            ["2", "Complete"],
            ["4", "Payment Review"],
            ["5", "Pending Payment"],
          ])
        );
        stateMap.set("Complete", new Map([["0", "Complete"]]));

        return stateMap.get(state);
      },
    };
  }

  evaluate(input) {
    console.log("input", input);
    this.transition.delta(input);
    let result;
    this.states.currentState === this.states.finalState
      ? (result = true)
      : (result = false);
    return result;
  }
}

let shopOrderStateMachine = new FiniteStateMachine();
let input = ["Complete"]; //["Pending", "Processing", "Complete"];
let result = shopOrderStateMachine.evaluate(input);
//console.warn("shopOrderStateMachine")
console.log(result);



// /**
//  * Function to calculate combinations.
//  * @param {Array} elements - The input array.
//  * @returns {Array} An array with all the array combinations.
//  */
// const combinationsRecursive = (elements) => {
//   if (elements.length === 0) return [[]];
//   const firstElement = elements[0];
//   const restElements = elements.slice(1);
//   const combinationsWithoutFirst = combinationsRecursive(restElements);
//   const combinationsWithFirst = [];

//   //   for (const combination in combinationsWithoutFirst) {
//   //   }

//   combinationsWithoutFirst.forEach((combination) => {
//     const combinationWithFirst = [...combination, firstElement];
//     combinationsWithFirst.push(combinationWithFirst);
//   });
//   return [...combinationsWithoutFirst, ...combinationsWithFirst];
// };

// console.log("Case: Empty Array");
// console.log(combinationsRecursive([]));

// console.log("Case: One Element");
// console.log(combinationsRecursive(["a"]));

// console.log("Case: Many Elements(diagram)");
// console.log(combinationsRecursive(["a", "b", "c"]));

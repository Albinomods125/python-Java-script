import { createCounter } from "./counter.js";
import { retry } from "./retry.js";
import { add, multiply } from "./math.js";
import { reverseText } from "./string.js";

console.log("=== Testando Counter ===");
const counter = createCounter();
console.log(counter());
console.log(counter());

console.log("\n=== Testando Math ===");
console.log("2 + 2 =", add(2, 2));
console.log("3 x 5 =", multiply(3, 5));

console.log("\n=== Testando String ===");
console.log("Texto invertido:", reverseText("javascript"));

console.log("\n=== Testando Retry ===");
let contador = 0;

await retry(
  async () => {
    contador++;
    if (contador < 3) throw new Error("Falha");
    return "Sucesso na tentativa " + contador;
  },
  { retries: 5, delay: 500 }
).then(console.log);

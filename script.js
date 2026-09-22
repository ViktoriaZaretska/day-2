function scrollToDemo() {
  document
    .getElementById("demo")
    .scrollIntoView({
      behavior: "smooth"
    });
}


function runAgent() {

  const type =
    document.getElementById("agentType").value;

  const goal =
    document.getElementById("goal").value.trim();

  const terminal =
    document.getElementById("terminal");


  if (!goal) {
    terminal.textContent =
      "> ERROR: Please enter an agent goal.";

    return;
  }


  const steps = [

    `> AGENT TYPE: ${type}`,

    `> GOAL: ${goal}`,

    "",

    "[1] OBSERVE",
    "Reading the task and identifying important context...",

    "",

    "[2] REASON",
    "Breaking the objective into smaller analytical tasks...",

    "",

    "[3] PLAN",
    "Creating an execution strategy...",

    "",

    "[4] TOOL SELECTION",
    "Selecting memory, knowledge sources and analytical tools...",

    "",

    "[5] ACTION",
    "Executing planned operations...",

    "",

    "[6] EVALUATION",
    "Checking whether the result satisfies the original goal...",

    "",

    "> TASK COMPLETE ✓"
  ];


  terminal.textContent = "";

  let i = 0;


  function printStep() {

    if (i < steps.length) {

      terminal.textContent +=
        steps[i] + "\n";

      terminal.scrollTop =
        terminal.scrollHeight;

      i++;

      setTimeout(
        printStep,
        350
      );
    }
  }


  printStep();
}
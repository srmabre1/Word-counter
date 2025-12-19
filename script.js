const textInput = document.getElementById("textInput");

textInput.addEventListener("input", () => {
  const text = textInput.value.trim();

  // Word count
  const words = text ? text.split(/\s+/).length : 0;

  // Character count
  const chars = text.length;

  // Sentence count
  const sentences = text ? text.split(/[.!?]+/).filter(s => s.trim() !== "").length : 0;

  // Paragraph count
  const paragraphs = text ? text.split(/\n+/).filter(p => p.trim() !== "").length : 0;

  document.getElementById("wordCount").innerText = words;
  document.getElementById("charCount").innerText = chars;
  document.getElementById("sentenceCount").innerText = sentences;
  document.getElementById("paragraphCount").innerText = paragraphs;
});

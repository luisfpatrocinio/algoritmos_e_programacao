import tkinter as tk

window = tk.Tk()
window.title("Janela Teste")
window.geometry("800x600")

button = tk.Button(window, text="Clique aqui!")
# ADICIONA A JANELA PRINCIPAL
button.pack(side = tk.BOTTOM)

label = tk.Label(window, font=("MatchupPro", 40),text = "Raça absoluta além da consciência")
label.pack(expand=True, fill="both", anchor=tk.CENTER)

window.mainloop()
import google.generativeai as genai

API_KEY = \
"AIzaSyBeuGMvzaR1NurEWitrrXp4gXhH4S4HQm4"

genai.configure(api_key=API_KEY)
model = genai.GenerativeModel('gemini-2.0-flash')
chat = model.start_chat()

def prompt_template(message) :
    return f"""
            Imagine you are a doctor. Respond to this patient’s message with the following:
            1. Mention the possible causes of their concern.
            2. Explain what the patient needs to do to avoid the issue and feel better.
            3. Give a warm, caring, and supportive message so the patient feels reassured.
            4. Suggest a sample appointment time between 8:00 AM and 10:00 PM.
            
            Patient message: {message}
            """


while True:
    userInput = input("You : ")
    if userInput.lower() == "exit":
        break
    response = chat.send_message(prompt_template(userInput))
    print("Gemini : ", response.text)
from flask import Flask, render_template, request, jsonify

app = Flask(__name__)

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/process_input', methods=['POST'])
def process_input():
    data = request.json
    input_text = data['input_text']
    
    # Your processing logic goes here
    # For demonstration, let's just return the input text
    output_text = f"You entered: {input_text}"
    
    return jsonify({'output_text': output_text})

if __name__ == '__main__':
    app.run(debug=True)

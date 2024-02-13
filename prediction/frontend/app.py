from flask import Flask, render_template, request, jsonify
import numpy as np
import joblib
from scipy.stats import mode
# Load the models

app = Flask(__name__)
final_rf_model = joblib.load('D:\disease detection\Disease-Prediction-using-ML\prediction\\final_rf_model.joblib')
final_nb_model = joblib.load('D:\disease detection\Disease-Prediction-using-ML\prediction\\final_nb_model.joblib')
final_svm_model = joblib.load('D:\disease detection\Disease-Prediction-using-ML\prediction\\final_svm_model.joblib')

# Load data_dict
data_dict = joblib.load('D:\disease detection\Disease-Prediction-using-ML\prediction\data_dict.joblib')


# Load your model and data_dict here
# ...

@app.route('/')
def index():
    return render_template('index2.html')

@app.route('/predict', methods=['POST'])
def predict():
    try:
        # Get the input data from the frontend
        symptoms = request.json['symptoms']
        
        # Call your prediction function
        predictions = predictDisease(symptoms)
        
        # Return the predictions as JSON
        return jsonify(predictions)

    except Exception as e:
        return jsonify({'error': str(e)})

if __name__ == '__main__':
    app.run(debug=True)

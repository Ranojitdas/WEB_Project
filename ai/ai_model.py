import numpy as np
from sklearn.tree import DecisionTreeClassifier

# Sample data: [hours studied, previous score]
X = np.array([[2, 50], [4, 60], [6, 70], [8, 80], [10, 90]])
y = np.array([55, 65, 75, 85, 95])  # Predicted future score

# Train the model
model = DecisionTreeClassifier()
model.fit(X, y)

# Function to predict performance
def predict_performance(hours_studied, previous_score):
    return model.predict([[hours_studied, previous_score]])[0]

# Example usage
if __name__ == "__main__":
    print(predict_performance(5, 60))  # Predict for 5 hours studied and 60 as previous score

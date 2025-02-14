const weeklyPlans = {
    "Sunday": {
        meals: {
            breakfast: [
                { food: "Scrambled Eggs", quantity: "4 eggs", calories: 320 },
                { food: "Avocado", quantity: "1 medium", calories: 240 }
            ],
            lunch: [
                { food: "Chicken Breast", quantity: "8 oz", calories: 376 },
                { food: "Brown Rice", quantity: "1 cup", calories: 218 },
                { food: "Steamed Broccoli", quantity: "1 cup", calories: 55 }
            ],
            snack: [
                { food: "Almonds", quantity: "1 handful", calories: 165 }
            ],
            dinner: [
                { food: "Salmon", quantity: "8 oz", calories: 460 },
                { food: "Roasted Sweet Potatoes", quantity: "1 cup", calories: 180 },
                { food: "Asparagus", quantity: "1 cup", calories: 40 }
            ]
        },
        workouts: [
            { exercise: "Squats", quantity: "5 sets x 12 reps (bodyweight)" },
            { exercise: "Push-ups", quantity: "4 sets x 15 reps" },
            { exercise: "Brisk Walk", quantity: "30 min" }
        ]
    },
    "Monday": {
        meals: {
            breakfast: [
                { food: "Eggs", quantity: "3 eggs", calories: 240 },
                { food: "Avocado", quantity: "1/2 medium", calories: 120 }
            ],
            lunch: [
                { food: "Steak", quantity: "8 oz", calories: 600 },
                { food: "Quinoa", quantity: "1 cup", calories: 222 }
            ],
            snack: [
                { food: "Walnuts", quantity: "1 handful", calories: 185 }
            ],
            dinner: [
                { food: "Chicken Breast", quantity: "8 oz", calories: 376 },
                { food: "Brussels Sprouts", quantity: "1 cup", calories: 56 },
                { food: "Mashed Sweet Potatoes", quantity: "1 cup", calories: 180 }
            ]
        },
        workouts: [
            { exercise: "Brisk Walk", quantity: "45 min" },
            { exercise: "Jump Rope", quantity: "5 sets x 1 min" }
        ]
    }
};

function loadPlan() {
    const date = new Date(document.getElementById("datePicker").value);
    const day = date.toLocaleDateString('en-US', { weekday: 'long' });
    const plan = weeklyPlans[day];

    if (plan) {
        document.getElementById("dayTitle").textContent = `Plan for ${day}`;

        // Clear lists
        ["breakfast", "lunch", "snack", "dinner"].forEach(meal => {
            document.getElementById(meal).innerHTML = "";
        });

        let calorieTable = document.getElementById("calorieTable");
        calorieTable.innerHTML = `
            <tr>
                <th>Food Item</th>
                <th>Quantity</th>
                <th>Calories</th>
            </tr>
        `;
        let totalCalories = 0;

        for (let mealType in plan.meals) {
            plan.meals[mealType].forEach(meal => {
                document.getElementById(mealType).innerHTML += `<li>${meal.food} - ${meal.quantity}</li>`;
                calorieTable.innerHTML += `<tr><td>${meal.food}</td><td>${meal.quantity}</td><td>${meal.calories} kcal</td></tr>`;
                totalCalories += meal.calories;
            });
        }

        document.getElementById("totalCalories").textContent = totalCalories;

        // Populate Workouts
        let workoutList = document.getElementById("workouts");
        workoutList.innerHTML = "";
        plan.workouts.forEach(workout => {
            workoutList.innerHTML += `<li>${workout.exercise} - ${workout.quantity}</li>`;
        });

    } else {
        document.getElementById("dayTitle").textContent = "No Plan Found";
    }
}

// Set default date to today
document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("datePicker").value = new Date().toISOString().split('T')[0];
    loadPlan();
});

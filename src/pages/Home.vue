<template>
  <div class="home-page">
    <!-- Features Section -->
    <section class="features">
      <div class="container">
        <h2>Why Choose CHL PharmaVue? 🌟</h2>
        <div class="feature-grid">
          <div class="feature-card">
            <span class="emoji">💊</span>
            <h3>Effortless Management</h3>
            <p>Track medications, inventory, and sales all in one place.</p>
          </div>
          <div class="feature-card">
            <span class="emoji">🌍</span>
            <h3>Reliable & Scalable</h3>
            <p>
              Designed to grow with your pharmacy, ensuring stability and
              efficiency.
            </p>
          </div>
          <div class="feature-card">
            <span class="emoji">⚡</span>
            <h3>Lightning Fast</h3>
            <p>Experience smooth and quick access to your pharmacy's data.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Testimonials Section -->
    <section class="testimonials">
      <div class="container">
        <h2>What Our Clients Say 💬</h2>
        <div class="testimonial-grid">
          <div class="testimonial-card">
            <p>
              "CHL PharmaVue transformed our pharmacy operations. It's a
              lifesaver!"
            </p>
            <h4>— Dr. Sarah Johnson</h4>
          </div>
          <div class="testimonial-card">
            <p>
              "Super easy to use! Fast, reliable, and secure. Highly
              recommended!"
            </p>
            <h4>— Ahmed Ben Salem</h4>
          </div>
          <div class="testimonial-card">
            <p>"A seamless experience with an intuitive interface. Love it!"</p>
            <h4>— Emily Carter</h4>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
/* General Styling */
.home-page {
  font-family: "Arial", sans-serif;
  color: #2a6041;
}

/* Features Section */
.features {
  text-align: center;
  padding: 0px 20px 80px 20px;
}

.features h2 {
  font-size: 36px;
  margin-bottom: 40px;
}

.feature-grid {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 30px;
}

.feature-card {
  text-align: center;
  width: 250px;
  background: #f3f7f3;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease-in-out;
}

.feature-card:hover {
  transform: scale(1.05);
}

.emoji {
  font-size: 50px;
  display: block;
  margin-bottom: 15px;
}

.feature-card h3 {
  font-size: 22px;
  margin-bottom: 10px;
}

.feature-card p {
  font-size: 16px;
  color: #537a5a;
}

/* Testimonials Section */
.testimonials {
  background: #f3f7f3;
  text-align: center;
  padding: 80px 20px;
}

.testimonials h2 {
  font-size: 36px;
  margin-bottom: 40px;
}

.testimonial-grid {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 30px;
}

.testimonial-card {
  width: 300px;
  background: white;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease-in-out;
}

.testimonial-card:hover {
  transform: scale(1.05);
}

.testimonial-card p {
  font-size: 18px;
  font-style: italic;
  color: #537a5a;
  margin-bottom: 10px;
}

.testimonial-card h4 {
  font-size: 16px;
  color: #2a6041;
  font-weight: bold;
}

/* Responsive Design */
@media (max-width: 768px) {
  .feature-grid,
  .testimonial-grid {
    flex-direction: column;
    align-items: center;
  }
}
</style>

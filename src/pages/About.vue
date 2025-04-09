<template>
  <div class="about-page">
    <!-- Hero Section -->
    <section class="hero">
      <div class="container">
        <h1>About CHL PharmaVue</h1>
        <p>
          We are dedicated to making pharmacy management simple and efficient.
        </p>
      </div>
    </section>

    <!-- Mission & Values Section -->
    <section class="mission">
      <div class="container">
        <h2>Our Mission</h2>
        <p>
          At CHL PharmaVue, our mission is to provide a seamless and intuitive
          platform for pharmacists to manage medications with ease.
        </p>

        <div class="values">
          <div class="value-card">
            <h3>🌿 Innovation</h3>
            <p>
              We embrace cutting-edge technology to improve pharmacy management.
            </p>
          </div>
          <div class="value-card">
            <h3>🤝 Integrity</h3>
            <p>
              We prioritize transparency, trust, and accuracy in everything we
              do.
            </p>
          </div>
          <div class="value-card">
            <h3>🌍 Community</h3>
            <p>
              We strive to create a positive impact on healthcare professionals
              and patients.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Team Section -->
    <section class="team">
      <div class="container">
        <h2>Meet Our Team</h2>
        <div class="team-grid">
          <div class="team-member">
            <img src="../assets/Ala_Rejeb.jpeg" alt="Team Member" />
            <h3>Ala Rejeb</h3>
            <p>CEO & Founder</p>
          </div>
          <div class="team-member">
            <img src="../assets/Eya_Rejeb.jpeg" alt="Team Member" />
            <h3>Eya Rejeb</h3>
            <p>Lead Developer</p>
          </div>
          <div class="team-member">
            <img src="../assets/Anis_Rejeb.jpeg" alt="Team Member" />
            <h3>Anis Rejeb</h3>
            <p>Marketing Manager</p>
          </div>
        </div>

        <!-- Team Group Image -->
        <div class="team-image">
          <img src="../assets/CHL_Pharmacie.png" alt="Our Team" />
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
/* General Page Styling */
.about-page {
  font-family: "Arial", sans-serif;
  color: #2a6041;
}

/* Hero Section */
.hero {
  background: linear-gradient(90deg, #a8e6cf, #dcedc1);
  color: #2a6041;
  text-align: center;
  padding: 80px 20px;
}

.hero h1 {
  font-size: 40px;
  margin-bottom: 10px;
}

.hero p {
  font-size: 18px;
}

/* Mission & Values */
.mission {
  text-align: center;
  padding: 60px 20px;
}

.mission h2 {
  font-size: 32px;
  margin-bottom: 20px;
}

.values {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 20px;
  margin-top: 30px;
}

.value-card {
  background: #f3f7f3;
  padding: 20px;
  border-radius: 10px;
  width: 250px;
  text-align: center;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease-in-out;
}

.value-card:hover {
  transform: scale(1.05);
}

.value-card h3 {
  font-size: 22px;
  margin-bottom: 10px;
}

.value-card p {
  font-size: 16px;
  color: #537a5a;
}

/* Team Section */
.team {
  background: #f3f7f3;
  text-align: center;
  padding: 60px 20px;
}

.team h2 {
  font-size: 32px;
  margin-bottom: 30px;
}

.team-grid {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 30px;
}

.team-member {
  text-align: center;
  width: 200px;
}

.team-member img {
  width: 100px;
  height: 100px;
  border-radius: 50%;
  border: 3px solid #2a6041;
}

.team-member h3 {
  font-size: 20px;
  margin-top: 10px;
}

.team-member p {
  font-size: 16px;
  color: #537a5a;
}

/* Team Group Image */
.team-image {
  margin-top: 40px;
  text-align: center;
}

.team-image img {
  max-width: 100%;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

/* Responsive Design */
@media (max-width: 768px) {
  .values,
  .team-grid {
    flex-direction: column;
    align-items: center;
  }
}
</style>

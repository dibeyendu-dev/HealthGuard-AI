function RecommendationCard({ icon, title, text }) {
  return (
    <div className="recommendation-card">
      <div className="recommendation-icon">{icon}</div>
      <div>
        <h3>{title}</h3>
        <p>{text}</p>
      </div>
    </div>
  );
}

export default RecommendationCard;
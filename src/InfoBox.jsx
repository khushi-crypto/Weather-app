import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import "./InfoBox.css";
import ThunderstormIcon from "@mui/icons-material/Thunderstorm";
import AcUnitIcon from "@mui/icons-material/AcUnit";
import WbSunnyIcon from "@mui/icons-material/WbSunny";

export default function InfoBox({ info }) {
  if (!info) return null; // safety check

  const INIT_URL = "https://images.unsplash.com/photo-1621260938401-7bdad0aec8fd?q=80&w=1171&auto=format&fit=crop";
  const hot_url = "https://images.unsplash.com/uploads/14121010130570e22bcdf/e1730efe?w=1000&auto=format&fit=crop&q=60";
  const rain_url = "https://plus.unsplash.com/premium_photo-1671406233410-9727cf249910?w=1000&auto=format&fit=crop&q=60";
  const cold_url = "https://images.unsplash.com/photo-1668531387310-9c3c2f272d52?w=1000&auto=format&fit=crop&q=60";

  const imgUrl =
    info.humidity > 80 ? rain_url : info.temp > 15 ? hot_url : cold_url;

  const Icon =
    info.humidity > 80 ? ThunderstormIcon : info.temp > 15 ? WbSunnyIcon : AcUnitIcon;

  return (
    <div className="InfoBox">
      <div className="cardContainer">
        <Card sx={{ maxWidth: 345, margin: "auto" }}>
          <CardMedia sx={{ height: 140 }} image={imgUrl} title="Weather" />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {info.city} <Icon />
            </Typography>
            <Typography variant="body2" sx={{ color: "text.secondary" }} component={"span"}>
              <div>Temperature = {info.temp}&deg;C</div>
              <div>Humidity = {info.humidity}%</div>
              <p>Min temp = {info.tempMin}&deg;C</p>
              <p>Max temp = {info.tempMax}&deg;C</p>
              <p>
                The weather can be described as <b>{info.weather}</b> and feels like = {info.feelslike}&deg;C
              </p>
            </Typography>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

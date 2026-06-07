import { Link } from "react-router-dom";
import { ArrowRight, Play } from "lucide-react";
import { useLanguage } from "../i18n/LanguageContext";
import { PageHero } from "../components/PageHero";
import { Reveal } from "../components/Reveal";
import { IMAGES } from "../constants/images";

const baselineVideos = [
  {
    title: "Match Summary Like On TV",
    text:
      "Video analysis, match stats, line calling and player feedback in
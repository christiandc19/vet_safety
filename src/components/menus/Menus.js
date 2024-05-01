import React from "react";
import { Link } from "react-router-dom";
import { Link as LinkRoll } from "react-scroll";
import "./Menus.css";

import logo from "../../assets/logo.png";


const Menus = () => {
  return (
    <>
      <div className="mh-cards-header container">
        <h1>
        VETSAFETY TREATMENT CENTER OFFERS VARIOUS MENTAL HEALTH
          PROGRAMS
        </h1>
        <p>
          At VetSafety Treatment Center, clients receive individual
          therapy alongside a range of additional treatments, including relapse
          prevention, trauma therapy, mindfulness meditation, transportation,
          yoga, and more. We offer support that clients need to allow them to
          gradually go back to treatment.
        </p>
      </div>

      <div class="mh-cards container">

      {/* Mental Health Thumbnails */}

          <div className="mh-card">
            <img src={logo} alt="logo" loading="lazy" />
            <LinkRoll activeClass="active" to="top" spy={true} smooth={true} duration={500}>
              <Link to="/depression">
                  <h2>DEPRESSION</h2>
                  <p>Depression is a pervasive mental health condition causing persistent feelings of sadness, loss of interest or pleasure, and a range of physical and cognitive symptoms that impact daily functioning.</p>
              </Link>
            </LinkRoll>
          </div>

          <div className="mh-card">
            <img src={logo} alt="logo" loading="lazy" />
             <LinkRoll activeClass="active" to="top" spy={true} smooth={true} duration={500}>
              <Link to="/anxiety">
                  <h2>ANXIETY</h2>
                  <p>Anxiety is a common mental health condition characterized by excessive worry, fear, and heightened apprehension, often accompanied by physical symptoms such as restlessness, muscle tension, and difficulty concentrating.</p>
              </Link>
            </LinkRoll>
          </div>

          <div className="mh-card">
            <img src={logo} alt="logo" loading="lazy" />
            <LinkRoll activeClass="active" to="top" spy={true} smooth={true} duration={500}>
              <Link to="/panic-disorder">
                  <h2>PANIC DISORDER</h2>
                  <p>Panic disorder is a type of anxiety disorder marked by recurring and unexpected panic attacks, accompanied by intense physical sensations and a persistent fear of future attacks.</p>
              </Link>
            </LinkRoll>
          </div>

          <div className="mh-card">
            <img src={logo} alt="logo" loading="lazy" />
            <LinkRoll activeClass="active" to="top" spy={true} smooth={true} duration={500}>
              <Link to="/acute-stress-disorder">
                  <h2>STRESS DISORDER</h2>
                  <p>Stress disorder refers to a range of mental health conditions triggered by exposure to traumatic events, causing symptoms such as intrusive memories, avoidance behaviors, and heightened arousal, significantly impacting daily functioning.</p>
              </Link>
            </LinkRoll>
          </div>

          <div className="mh-card">
            <img src={logo} alt="logo" loading="lazy" />
            <LinkRoll activeClass="active" to="top" spy={true} smooth={true} duration={500}>
              <Link to="/anger-disorder">
                  <h2>ANGER DISORDER</h2>
                  <p>Anger disorder, also known as Intermittent Explosive Disorder (IED), is a mental health condition characterized by recurrent episodes of intense, impulsive anger, verbal or physical aggression, and a difficulty in controlling these outbursts.</p>
              </Link>
            </LinkRoll>
          </div>

          <div className="mh-card">
            <img src={logo} alt="logo" loading="lazy" />
            <LinkRoll activeClass="active" to="top" spy={true} smooth={true} duration={500}>
              <Link to="/adhd">
                  <h2>ADHD DISORDER</h2>
                  <p>Attention-Deficit/Hyperactivity Disorder (ADHD) is a neurodevelopmental disorder characterized by persistent patterns of inattention, hyperactivity, and impulsivity that can significantly impair daily functioning.</p>
              </Link>
            </LinkRoll>
          </div>

          <div className="mh-card">
            <img src={logo} alt="logo" loading="lazy" />
            <LinkRoll activeClass="active" to="top" spy={true} smooth={true} duration={500}>
              <Link to="/ptsd">
                  <h2>PTSD DISORDER</h2>
                  <p>Post-Traumatic Stress Disorder (PTSD) is a mental health condition that develops in response to exposure to traumatic events, leading to distressing symptoms such as intrusive memories, flashbacks, hypervigilance, and avoidance behaviors.</p>
              </Link>
            </LinkRoll>
          </div>

          <div className="mh-card">
            <img src={logo} alt="logo" loading="lazy" />
            <LinkRoll activeClass="active" to="top" spy={true} smooth={true} duration={500}>
              <Link to="/bipolar-disorder">
                  <h2>BIPOLAR DISORDER</h2>
                  <p>Bipolar disorder is a mood disorder characterized by recurrent episodes of both depressive and manic states, impacting an individual's mood, energy levels, and daily functioning.</p>
              </Link>
            </LinkRoll>
          </div>

          <div className="mh-card">
            <img src={logo} alt="logo" loading="lazy" />
            <LinkRoll activeClass="active" to="top" spy={true} smooth={true} duration={500}>
              <Link to="/schizoaffective">
                  <h2>SCHIZOAFFECTIVE</h2>
                  <p>Schizoaffective disorder is a mental health condition characterized by a combination of schizophrenia symptoms, such as hallucinations or delusions, and mood disorder symptoms, such as mania or depression, occurring concurrently.</p>
              </Link>
            </LinkRoll>
          </div>

          <div className="mh-card">
            <img src={logo} alt="logo" loading="lazy" />
            <LinkRoll activeClass="active" to="top" spy={true} smooth={true} duration={500}>
              <Link to="/schizophrenia">
                  <h2>SCHIZOPHRENIA</h2>
                  <p>Schizophrenia is a severe mental health disorder marked by distorted thinking, hallucinations, delusions, disorganized speech and behavior, and impaired daily functioning.</p>
              </Link>
            </LinkRoll>
          </div>

        
        </div>
    </>
  );
};

export default Menus;

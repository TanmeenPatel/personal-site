import styles from "@/styles/AbstractPost.module.css";

import Head from "next/head";

export default function PostPage() {
    return (
        <>
            <Head>
                <title>Post Title</title>
            </Head>
            <img
                src="/assets/trianglesart.svg"
                className={styles["triangles"]}
            />
            <div className={styles["return"]}>
                <a href="abstract.html">
                    <img
                        src="/assets/arrow.svg"
                        alt=""
                        style={{
                            marginLeft: "3vw",
                            marginTop: "5vh",
                            width: "3vh",
                            userSelect: "none",
                        }}
                    />
                </a>
                <span>
                    <a href="/abstract">back to blog</a>
                </span>
            </div>
            <div className={styles["heading-info"]}>
                <h1>Do Prisons Work?</h1>
                <span className={styles["read-info"]}>345 words, 6 mins</span>
            </div>
            <div className={styles["article"]}>
                <p>
                    The concept of prison dates back to 640 B.C., with the Roman
                    prison Mamertine, aiming to use prisons as a form of
                    punishment. Over the years, there have been countless
                    changes that make the modern-day prison unrecognizable from
                    Mamertine, but one question remains inherent to date: do
                    prisons work? The modern-day prison was made in response to
                    the growing resistance against public execution, torture,
                    and other physical punishments for criminals. Those who
                    committed petty crimes were subject to these punishments
                    simply for the lack of other methods. Prisons, instead of
                    being used as a punishment itself, were used to hold
                    criminals awaiting their punishment. With the unrest rising
                    among the public, a solution had to be devised. And the
                    solution, hidden in plain sight, came in the form of prison.
                    With the passage of time , the face of prison has undergone
                    many alterations. The prisons of today have a two-fold
                    mission: 1) To protect the society from dangerous
                    law-violators who can cause harm and, 2) To provide a
                    deterrent to would-be criminals and reduce the number of
                    crimes committed by former prisoners
                </p>
                <p>
                    The question “Do prisons work?” is subjective, with people
                    having varying opinions. 91% of Americans believe that the
                    criminal justice system needs to be fixed, whereas in the
                    UK, 51% of the population wants the government to find other
                    methods of deterring crime and punishing criminals. There is
                    a widespread belief that prison worsens crime, forcing
                    prisoners to be exposed to more crime within the walled and
                    well-monitored facilities, with ex-inmates returning to
                    crime.
                </p>
                <p>
                    Along with this, there is also a rise in people's opinion
                    that prisons should be made more humane. Since time
                    immemorial, prison has been about punishing criminals in the
                    harshest way possible. In America - otherwise known as the
                    Land of the Free - prisoners do not have basic human rights,
                    as all other citizens do under the First Amendment. The 13th
                    Amendment which abolishes slavery has a special exception
                    for prisoners. Their right to privacy and wellbeing is taken
                    away, among others. Traditional prison not only takes away
                    the freedom of its inmates but also places them under an
                    eternal darkness where they are exposed to and reminded of
                    their crimes and cruel punishment.
                </p>
                <p>
                    Most prisons are designed in a manner that suppresses
                    prisoners. The materials used (like concrete and steel) are
                    visually unpleasant and reflect sound. The environments are
                    dark and congested. Windows, if they are even present, look
                    onto other parts of the prison. Prisoners lose track of time
                    and seasons. Moreover, prison designs restrict prisoners to
                    similar hallways and cells day after day.
                </p>
                <p>
                    All of these influence the mental health of prisoners.
                    Isolation, congestion, and remorse are recurring and
                    constant emotions in prisoners that eventually lead to
                    mental disorders. This steers clear of the one of the aims
                    of prisons: to reform the inmates and prepare them for a
                    law-abiding life after their sentence where they can
                    reconnect with the society.
                </p>
                <p>
                    The motive of prisons needs to be shifted from punishment to
                    rehabilitation and reform. Deeper thought calls for us to
                    redefine our current understanding of prison and punishment.
                    Being imprisoned is the punishment, everyday life shouldn't
                    be a sentence.
                </p>
                <br />
                <p>
                    <b>Sources:</b>
                    <br />
                    <br />
                    https://en.wikipedia.org/wiki/Prison <br />
                    https://www.britannica.com/topic/prison <br />
                    https://study.com/learn/lesson/prisons-history-characteristics-purpose.html{" "}
                    <br />
                    https://www.crimemuseum.org/ <br />
                    https://www.law.ac.uk/resources/blog/is-prison-effective/{" "}
                    <br />
                    https://www.unodc.org/ <br />
                </p>
            </div>

            <style jsx>
                {`
                    html {
                        scroll-behavior: smooth;
                        overflow-x: hidden;
                    }

                    body {
                        margin: 0;
                        background-color: #1d1d1d;
                        font-size: 24px;
                        /* background-image: url("/assets/stars.svg");
                    background-repeat: no-repeat; */
                        font-family: IBM Plex Mono, "Courier New", Courier,
                            monospace;
                        color: white;
                    }

                    h1 {
                        font-family: IBM Plex Serif;
                        margin-left: 3vw;
                        margin-bottom: 3vh;
                    }

                    span {
                        font-size: 0.8em;
                        user-select: none;
                    }
                `}
            </style>
        </>
    );
}

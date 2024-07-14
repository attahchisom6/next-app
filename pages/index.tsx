import Head from "next/head";
import styles from "../styles/globals.css";
import Header from "@/components/Header";
import Section from "@/components/Section";
import Card from "@/components/Card";
import Footer from "@/components/Footer";

const Home = () => {
    return (
        <div className={styles.container}>
            <Head>
                <meta charSet="utf-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <title>Business CAC Registration Venture</title>
            </Head>
            <Header text="Business and Venture CAC Registration" />
            <main>
                <Section text="Abput Us" >
                    <Card>
                        <p>We provide real-time CAC registration for your business, ensuring your unique products are protected by law.</p>
                        <p>We are a team of licensed professionals authorized by the government to register and protect your products.</p>
                    </Card>
                </Section>
                <Section text="Business Registration">
                    <Card>
                        <p>Small-scale business registration</p>
                        <p>Large-scale business registration</p>
                    </Catd>
                </Section>
                <Section text="Consultancy">
                    <Card>
                        <p>We provide professional advice to make your business robust and protected.</p>
                        <p>We offer counsel on how to optimize your business for greater success.</p>
                    </Card>
                </Section>
                <Section>
                    <Card>
                        <button className={styles.button} onClick={() => alert('Redirect to registration page')}>
                            Get Started
                        </button>
                    </Card>
                </Section>
            </main>
            <Footer>
                <p>© 2024 Business CAC Registration Venture. All rights reserved.</p>
            </Footer>
        </div>
    );
}

export default Home;

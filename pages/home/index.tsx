import { Animated } from "react-animated-css"
import  styles from './index.module.css'

function Home () {
    return (
      <div className={styles.home}>
        <div className={styles.homehero}>
          <div className={styles.homeherowarp}>
            <Animated animationIn="bounceInDown" animationOut="fadeOut" animationInDuration={1000} animationOutDuration={1000}  isVisible={true}>
              <h1 className={styles.title}>
              车辆数据一站式服务
              </h1>
            </Animated>
            <Animated animationIn="bounceInUp" animationOut="fadeOut" animationInDuration={1000} animationOutDuration={1000} isVisible={true}>
              <p className={styles.description}>
                为新能源和传统能源车，提供满足国家和地方标准的数据上报，以及各个自主业务应用场景服务
              </p>
            </Animated>
          </div>
        </div>
        <section className={styles.homesection}>
          服务体系
        </section>
        <section className={styles.homesection}>
          技术优势
        </section>
        <section className={styles.homesection}>
          服务方式
        </section>
    </div>
    )
}

export default Home
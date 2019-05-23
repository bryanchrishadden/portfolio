

import React, { Component } from 'react';
import '../App.css';

const HomedepotIcon = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAMAAAD04JH5AAAA81BMVEX5YwT6YQT+/v7x4tHzmF/8/vr//v/6///8YAL7/vz4YQv//vz3YwX//Pv8/v/z487/XgH2/f//+//0Ywn7Xwv//vbqgj738Ov2aBH58ObrzKrygDr//vXz0Lbwj0z9//L78e30hUHwoWnykFXw1rfyxqjy49jyoWr0yqP1wJz2ejv1p3f2tYXzdSP39OzyfjbzbhnxdSv62Mf6to70vJTwfCjtmlrzjE7vqHP0oGf3ybHtqnn2vZ/1/vXu2r/wiDv18drzf0D6ayXxdRruqojpr3/zmmvorHLquZDv5M/zkEP239L0jVj0z6Dz4djwu5zzvYUW6PT/AAAMVElEQVR4nO1aa3faSrLtFrSkbrUe0BK0zCPBGIwDemCDsePgvM5kYnvuyfz/X3N3g3Fij+euFeCcL5daWV6JTKytql1Ve7dFyCEOcYhDHOIQhzjEIQ5xiEP8lzgKw8q2EVbCO/P154Xw6LcBhJzZ1haRWIG3bAe+F3C+uWYzHv4+APa9uk1cf+tXvweMDavVy6eLZ+z3AVSsqku3CJe6vTTwA34mfl6rWpXfBxBUf/vmEpCFLHJmWU6yHPxEUOV/DwBXCCpUmvidi0nYDq7/dgBURO5Ud3+UhCr17ib7+wFQt5F31BrLPP55ee8ABCWxisivl0z9Y9JKOetoEkvxjV3FRNL4LwEgIiUXXfkMgKm/fJdzzmodjY8UzDp2qfhrMkAU7bf5ffzsIurfar7xwX/WAQnckcNuIkr+EgAxvc/TYd57ftVtpI4fMIvz4EgJemUlyxt3/wDwbFTc/+ueqFaGv64YZ+pPRZZj9q7Gr+GBmNWYxa4o7Y1KsU8AqD/pvg0zqc+nSqhoU/9YXFu3SMEaAHjQyz3G7DE5XVbKS3uLUfzfMqDcvs9q4Rd3NJxGQm7qPx3rTBVpbbV9DA/0vNSnzREtc7vyR/vPvQGg9GOe2FYwzGasMi+uf9a/AOVbqbm/4QEQxIoKxBHjzNtPCWJCaKyybgc/0gkb1dnsq38VCWH637oTUsWySJ3EeeJBTARVEydg/n5KQFwl+qGKNRDUg8pXqdyhf0Ol6X+rvSAR5kORsuSJB4QKl144Hgv2BEDR7puHUlLdQY6T4Rcl7liVrvrfc/yuVFFMpqnzxIMSVSEdK6i199QFoptb1q0WQMAgOirlR79v9j/3A4uxvC8jlL144gE/wlQu33rp920EyQsAriBx3GXM4/WHMib6JOEe+7PRV26WerbjmZvmfayINQ9qGx7EP1jeqtq7Z8DU//66/+CzJT/XmuhOALp9pK7STcfygtUNE8MDDUniPfFAddPC7Qd7AID6s6ouQ5tbwYmOBarAugojSF173F7VndWTvuGBnOZPPDjR2ImnW4jSlwBi0s/ZsJQaCPzaeUnFx7yPphREiwqrs/UT8zUPyE8eNDEv3ev2cCcASL+rFmg1766UxwHzAu9Wy2wBASYkvtcPUtsCK5/xIPB54C/TnotO3HkXxC7VJxWfseAu6zQeeOKwu1CLqDVqmWFHztORzfxnPGhhKrN2s3CRkJ0BuIJepg1yEtQYC6fR19BzLNaPSK/JvE5B3LibXEzwvQ0PCHhA52/8WlpApKo9ZIDoO9a8V0dm2w8zUT54Sd81+oszxjsfCe3k5WTtglY8IGYe3PK0RZA7wN8FgMCulf/6n6w3yIvyKGhzjB9arXdjuV48Jm57RTLTM+5xvpoHvC+U+Brg/oJAH5KdALhU0v6yflSSe+2i+blv3X27uhfyXdN58oNB5S7J1CwABPPvJVuIlq5msYypINGOGZDRIsc+O0LrC6WPOHcsfxGrz5+4vwHAE8aSTiwntbUhrQfJJz4GO/XZQModu0CQRaPiL7nzHptFuGUHQqtLhEhRjScAWM826wk1CVYlYIz5b6fI3ixgsIi7lQD7Z5w9OJ6ddDD2lNAP7T6uiptvxOiCADdf193qQKB9516QWI7P00JFelJcfmBnqMMuAOSpde5mFSexA+j9SNLbrpLYAIacotfxNucAKH8XQ3fmeHXuv2m2AHWwxOou/h3rnQDE7rHTd79WaizxTrRGPiX6yqX4sS4lstfx+ar/vRoPIU31bNnG/H1HZDxy6uz8iyLxboOICHk6clU25IHFT3oZhLjILicX43stUYm5aA1WGXDAg2s4IfWh5pn+l59zP+H129J4k33IciDAs7KedBvnHrMdZuVnhYrLQVUV0Efc5OFOuyQ+481CxvL9pJcz2+cVuCRS3YMki7MQ3O676sPSS+yat7SDwJ9oUj7cXatixJLACrwx5n6YFiKms/a5bMApejwshbsPQSIllA/ur9+jxvV2UGcO57YxKA9sROOik4CNaYkPaEx/M62nFAgwvMOS7AMAHFGl66pRl5TyhtnovrrHcMuCliEfKTcuBhC/ExmbU5Lq7GhUPyGikUMpYHbv5YyISPzwqneHLJNxAAjJ6hhvmBEgeI+HJvNRkk9xex0uE2zsvEHJvUFghWd8N0HyiIBQXWEd4sKOGVXirHSfE+q4rCw/aBeDIRtkkSivF8d+G32Zdily4Fi8VtuTMYm6Ac8LSBxBx9xfLx5uT5TUf7KH/rQ/B1clGZ0Y+RigIPmcyl7OWXiT7J4B2HKYnIRDD2C9EHL1eJLKuF9QlaVYRygEer5MmlMzwAPPsx5UTLrL4bTv7JYB4//VyuTgpk5lSjDnyBgIEtv2eHAGATQBK1JDAPGRs3QuSDdnzHH6yFol24Mkw/B1wcFbD20FBNgJqALsPya/U891pBvMzrF/lCQL3uZpJtyuD5mKbazkbnrgsQfR30SJI487yMFwutKJY8wDTMC6taDRce2T0X/6c6tc2rafzk0VuFcx/3kfo9htfDoB+y+Yb4awyQFWEhkbqtU5G7uqevvZpeIK9wyHzLF5Onfdbu6FkMx0twxszv/YDCVY8FXr2QYBka4ED7CFnAt8C84B+w/zyYJiSrgFQqjL9sUa/06a8PH8j/3A32W6dkBWsOEBt9qOPTEFUaLbvQwdD1sKZrntpPO4yDO5M4DN+R/3rlDj8dryrXphzQNWr7NLFxtPDthYlOeBY4VVEMN30tnlZ7mPk1K3Yfw/9v0N/MFw1fsON1VAEYS8cRI/i7UrRjWPXbnlrefcqvk5MmWnC0p2A4D6uzHybzN7NXSOBUYcT/iGB1JISTjrQDnrAUYuEMRl880p/OK8et2QTxzeFoCrFBZtnrDHAwjnSsBpP54BmSrA92SJs6BUz8+MQmXOlVvpmKxFz85xty6BQv9P6k30+8qEeN4YOefOhgfDuVDy/QeotsFDSUdQyMy76WvlYnPC0OjdM4D6jxb34pitjK+FJxxDJvsbHgR5J+1qLfQoYGEpR8iB513FhGBtwNNHOwG486uu8X/2JZzFMbS/s14+qEK3ElgM7t+clfhnkKan6eTiZIA8QIEFbCyRl+cn6dsACINv1Pg//gVaw1R+s/+vJFXj1GGeBx1YuYR1PbvXhBQaWR8w6FU2udSx3BlAxe6v+t8e4XEEPcb+X9U+8ccEC2ZxcXTbuehqU3/e7In45EIoFQ2wKxgf6pjsAUDV9H9t6Q2kWCFgax54/Nh4dixeSiI4kYGTsLwrviUzTEM6CJCWjDxPwHYc8H6kgW07sCMDs1HVBZj4yIMbAsOkaYxCR/8OsJV5vsD0u5Dfp2rEhhl9GdsAeGAs4BYGEDb+KCZymnpPPODoBbSa8TyqmN7iei1f3F8eZbPm/PouI3sBEPp1Y3tt89UZCJ3yi9MND5h3NjvRkZDmd1IkO6+hLnlPClJ9k7fKV37juxUH2NnlW9NVdR60+UhXb6jY8MBhjH3SyMLHyeBDNy7Pa9y28640v5qZmiP6vQDAIGpBX2x4oM2vh05NOjzb+P93Usoz7B+bh70yZBCn+UINXqn/LgBI7y37yQOT8FOkw7GN/9dKtCaTFBKkVr+GMQAV88U/Mr1XAJT2mr/wgKIbT5d1NDr8f6RGeSMq3jo88Xi1PLe5E0CARXsGgBw88iDBRMI8wFSG/ob/x/z3854oUnhSr1mWt3AMpY7UngFQ2mr+5AHcYSxTPy9iqUbmRALUL1LsQHZFy9f6HwEPs9spmfyFB++Vkt16/s5V0bzz4CQBS3vuNOU86ZDyZPrqw0vzZzdJ1ss3PGCjL9XFpIA1Q699DaGAOCzwHLbsVtDX+t9EvOMZEZTnEw+4zf2Ris25ER4LrhxGKW+4Reqcrc70XwVQlrsbk808MP3fMuf/a2BlBTORNxv01Ou/enN8Uh7/45/9nQGIRx6Y/ncjtZr1UD2krNhITN77dqtfz79yGx8nfxzvwZqteWD6n5jz/1UGYFeRA+7bea98IUB+AVDcVPcBYD0PHs//f7lsEPDhVNNXM4ASqKvrq8V2AF68yHTN66h//PxG4EHIK6/P/01ovd2LTC9f5Tqz2Y9q//T65atbg9ofly+v/Uds8yrXy5fZsO98O+DtX6/ZmE/MbwfW/xG2+dg2L7P9x+t84YP5Mtzu/b4tXuc7xCEOcYhDHOIQhzjEIQ7x/yb+FxscPZMqgvZRAAAAAElFTkSuQmCC'

var HomedepotImg = {
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    backgroundImage: `url(${HomedepotIcon})`,
    color: "black"
};

class HomedepotPortfolioRow extends Component {
    render() {
        return (
            <div className="cards-wrapper">
                <div
                    href="/"
                    id="hd_internalFramework"
                    className="ux-column"
                    onClick={this.props.handleCardClick}
                    style={HomedepotImg}
                >
                    <h2>Internal Framework</h2>
                </div>
            </div>
        )
    }
}

export default HomedepotPortfolioRow
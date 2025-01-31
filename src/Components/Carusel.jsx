import React from 'react';

const Carusel = () => {
    return (
        <div className='mx-auto  w-10/12 py-7 '>
            
            <div className="carousel w-full ">
  <div id="item1" className="carousel-item w-1/2 h-1/2 mx-auto">
    <img
      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTT8EEMRo6Z50OIqS8Oel0pj0is4cDRvqz66Q&s"
      className="w-full  h-full object-cover" />
  </div>
  <div id="item2" className="carousel-item w-1/2 h-1/2">
    <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKnuA0N7E34dLO2ycd7bAmoGGo6ecvMrs-_Q&s'
      className="w-full" />
  </div>
  <div id="item3" className="carousel-item w-1/2 h-1/2">
    <img
src='data:image/jpeg;base64,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'      className="w-full " />
  </div>
  
  <div id="item4" className="carousel-item w-1/2 h-1/2">
    <img
      src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxMTEhUTExMWFhUXFxoYGBgWGBgZHRseFxsaFxgXGB0bHSggGBonHRoYITEhJSkrLi4uGB8zODMtNygtLi0BCgoKDg0OGxAQGy0mICYtLS8tLS0vLS0tLy0tLi0vKy0tLS0tLS8tMC0tLS8tLS0tLS0tLS0tLS0tLS0tLS0tLf/AABEIAKoBKQMBIgACEQEDEQH/xAAbAAACAgMBAAAAAAAAAAAAAAAFBgMEAQIHAP/EAEIQAAIBAgQDBgMECAUEAgMAAAECEQMhAAQSMQVBUQYTImFxgTKRoSNCscEHFFJigpLR8CRysuHxFTOi0hbiY3OT/8QAGgEAAwEBAQEAAAAAAAAAAAAAAgMEAQAFBv/EADMRAAEEAAUBBgYBAwUAAAAAAAEAAgMRBBIhMUFREyJhcZHwFDKBobHB4QUj8RUkUmLR/9oADAMBAAIRAxEAPwDqxpWxhGi0YnxFUTaMU2vCLa1CyGAtjKm/l/YxDOJEaSPfHUuDlPj048MeOBTlqyziJgRifGDjVhbaru84371VBJsBucDeO8Wp5al3rgm+kKouSdh0Gxucc9zXaLMZuoAiKoRpkvKCLg2sfWZ32GNykjQIWkZu8U08e7UOjMizTUDxPAL+IAhlBBWb7EGccnGbzZzArPmXcjYs7SpkGV3jblHpywX4xxc1WCd4aiovidoGrTaFA+FZsOZmTiEUaCgFqgdib6CNNxMDTJPvp2w4MaQ299PVWTTMkFQtDWhtGyLPU6/gf4AZ7Ku7swKQTzkeQ2XpGLPBuHVi5VWQahE+LkQ45XBKD2xbzDqzeBdIgD3Aux6czA2wT4emmtSHP4m8tQ8IP8N/4sD8OwqY4uQCrROvw/MVFUNmbKCoHieFKlWRZgRy84wOTses6XrZhobSdICjYGfCJgggg3wUzdY5ep3jH7J/i/dYbkDnPMD19SuWqhgjhRDeKWCgk+EK1zJAC2bzPQHBua1zsxGuydgGEDK/RnBuhfnz5IJk+FU6J8K6yLqXl+moKWJ0VACJgA8umC9Cqri3/GPZ9/Gurw6eZgATzLkwQB039hNXMZdiddK556CHE9RpJEHoMG3LxSgnY4OIJuj1vnr9/wCbV3LVnpRoqMpJOzb2BFjZtiDI/GzBwztG2rRXi9ldRz/eA29umFag7VCFKeJWHlB5f8efS+Cj8NCqNTS5KkRzhhPt/sL855nsaa5VWHikl12b7290mzPZk/AszzP5Ys0rKMVMupbxt8sWgMAlWpBVxuXGIukDG5pzzxyMEr1OfrjMYyTGMDGIgq/Ec9Sopqq1EpqTALsFBPICeeB+Q7TZSq6pTroXb4VuCbTbUBPP5YRf0vPVqZjLUVDBdJKld2dmA0dAYVeYtqwpZTLV6a94w7sUtK1iakifD8eknSQ0wdx8MnThRko0ro8IHszWb+y74cc0/Sn2gJ/wlJ4n/unYHbw7XA5wdyBzxVrdvqlPK0tLd5XI0gqGCBQY1HUPGxtvEaeU3RnFSuzVIcBTcgTDGSNbR8cB3mJ8BHQFgeKspbcM5r9/r7+y6R+i3s8lOn+tMPtH1IszKqGIMzuxIJJ6QJMYfMCOxtALkqKqORm0X1HVzN5mbm84MlcMtefLZcSVoBe2JycarT9serC2MQgEBbA48zRiFDBxs8nljqXXosIs4k0jHrDbHtQ88ctAAU2PEYyrz/XA3O8SIfQBA69ev9+WMREgBW2EGJxjAT9bcsRrCjqfX0k+mDSGRP16+nUYJAOqnSwmYHniFs5TmNQnGxIIggH1wMzeWpseaHqLj3xlIsyLB52x7VgXwtWSQ8RNjO/ni8PX2xy4EpP7b8X8Yy6Q7CHdd4BnQSB5gR54CcP4uRU7jNUzIbQ4cC0mLgdJFrzjTjeYSnna9Oqxo1cxpdKp2IQAAhtoDU4ibRF5sOyvGglKrUfMisCzOqlCqmofvmQCTy02gWtykLmkuu74HvTqvXjY5rWAAVyU18f7EUdJZNNM7kptzA1CLDzGEirwCqpKnRI/ZJI62IW4w5cBoVs1SavmwRTYFu7JPiAHhMW0rG3Pn6qXb+gKNTLsjMtN1emFBg/ZlNJ1C4Hj62gb4oMhaKa5KbCJCS9lfXX7aKfhHBiVqVqsClTZUJk+JmvpAIFtpM7HEOQzEVtdUQTVBYENyPw2E8yMLdbj9akTTVmqUm3psSwMCZHQ33FxyIxue01Bl8TMriLMrE22kgbiI9I6X4Yh4WOwUTtrHvxXQTl6daoPA7sRpXvindiZMhQCfQaY8pvgZ2h4bmlcKc2/iBOiiCm3S5Le+BtLtrSLL3KVHcQwhYEr4ok+h5YrcZGarqzvUrFi16dEsEiWXSFUS8QDN7HphZle7cqssBAza1tfH6UdXg1NZaszA8zWqBD/AOZGCXA6OXLgUmoGDLAPSJIG4jVqPlbcYVKfZ5jcUD6uI9/Hc4L8L4SlF1qVDTkMpEWAggkkkCTFoHnfArQB0TxT4oqVB3fjbSQEQgk7HYHwgcy2kD6YrcK7aqlc069IsxaPswWIm4nVGsQdxHpFgHrcVVZoZCmTPx1RcnoFLbneCbbwDM4gy/DFpNLS2ZmNIJ8DEwdbffbyuOZmfDjbGyx7Q8UV2PJZxKqK9MyjbHbYwbG+4xLXq6Rb4jt/XFPhNMKCLFlIXe3hRAf788W1QkkNBMyIxQDYXjyNyuICzlpG5knfFhn5fPEJHzxh6mkS1vLmcahCnDDljcHFTL1S14ge+LOMRArlPbftEzu4FPvKtBrUdNwjC5LXN0IJItt7LvG+0dPOZYZfXomoruCJfwagEpqpMsdRJawAjzGOm8b7N5apVq1KyKverGtSQSFFx+63ntA5+IFHytKi8EpRSmhOuqEVb0mZRVpafuOVBK3AmdzIlc3vWd17DJg2OmjQ16pLGc8IgHWQUpn4oVSY9gST6tjpXCCMt3GXOumSyDuqkeJlBY1ab21k8wbiwB5YQeGKWzSUsvLLrJTUpPhXUTdlMEmCdzY4692WehXy6U6qo5pvqUMvwEElCgYkqJB0kG0RaNOHZbU8shBF+aYeFEmncRBIvv1/PF0rjSgiqNKiPmfmTviTDAoXUSSFG7RiFU5nE7DGq0vlgkpwsqNqiqrMbKoLE+QEk/LFTgnGKOaQ1KL6gDBEEEHoQfnjbjDinSqMbKFJNtUDnbn6YDfo6yLJli7FD3jSugEeFBoUkm7MQBfAEnMAE9kbTE5x3BFftM4XGcZx6MElUsCj52wHzuaKtpemCAZXzjng9GKueya1B4psJEb461hZ0QlMkDWUgypl5HKDt+A98FHa3oLY2p01SyixEbzvzk8sRVWC+XrjQgcKC8TivmASLfXGKleCRItiucyrGA1/I9MagJWlHMM2pSBIPS0HG6VDptyOIVqg7G/Tlbn64izVQgWMXBPneSJxqy1nifDVzNOHVGKmYqLqWYiQQQyN+8pBthMHZfK5aqHOTAgyrtVqVUB5QrGJ5jVq28sOSV4JVVGkRPTr+eBvabMlqRpgeKp4RaYi+ryiBflvsDhbowdVZBinNpu6J5fiqlQXI6XMAk2gk9fPecLvaDswmedGLFUoqy01WEBLwS/wnosC3wieeOY9q8q9GuEIAKt4TsRMMpXmLRHOR1w3dne3VVaaipTL/vUhMze6mAD/ABew2wmidl6pICk4J+jPMd8S7jux8J3a+/kDHn7Ysdv+GZKhQ7qoAri9Mga3L8o2LD9q4EEbWxZzf6RqqrFHL1Sf39KD5jUfphB4vxqvVrmpVJDkASAygAX0pJk3gkzy9sZRWWF7s9qTxJlszWafBFIqizzLSb7jaBfyhw4blq9QTWijvCytU+UsrEKT/lP9BvZnPsUYPUNoI1MTHkJ2wZbiyAeAd60jwJJJkwT4LgX3GAs2joUrA4VS+9rc/vMQPYpo+q4F8R4XlywJooSNrAfMqBItznEtDOZmu2ikqK1xB5adwdUQfKMX8rkGq5apVqVT9mWGggATANj8Sybb4aWPItyS2SLNTTr9T91S4OWXMUlpAKGLAqIUN4SYMDyw2UuBd4Kr06wWs0gVgquEaL6FP4kz0iZxzL/q9XvwgCKJ+6pnmreJizDzgixx07gdYUgIPhPxf1H99eowoPAeGnlUyQSOhLmbqnwnJ5yixSpS1BdnpsXVwSbKG8anyaYncgyHKjl1JYEEwN5+WNwR+0Qf78sC+Pcep5NWepLFohVjURzJkgBfM4qa2tAvHJdM8AC3eHKJagsAbkQDvGM08vJ1G588KeX/AEj5IoWq66RH7aEnncFNUjFih2/yRaFqOwncU30/UflgqKZ8FiLy5HehTYoxk4VO0fbehl6KVKZFZqhIRQ0CRuXO6gSOU4HcJ7esXVMzTChioD05gFrDUrEkja467Y7KSjjwGIewva3Qevpui/a7LPWahQQfF3rOTEKgplC1+cuI3gwYgHHO+2vGFRRw/LqFRb1ip1BpuEB5i4J62HXHTe0/D6legRQYJVBBV5ItIJUHa8DcEeWxHMuwvZNzm2GZQ/YmWDgnWxutzOoHeZMxhJjt9psOIqGidr081X7L8NYK0uqI9jDDXqIKhlv4QBYkdb9MOfCslSdHIVlp0qb6QmnW8FS3iYHmBGxsd9sL/G8w9KsClOm1Bu8WoCCNOmo6IU0kFTGkDlbFuvwULRqVsvWrBkpgFA9qgdhB8XO/8XPrjqNoLF97lNPBa2cFLvFisoLDu3Ol4UkLpcm8rpMNcXuZEMPDs6KqatDodmSopVlMSQZ333FjgR2Tn9XWSPiqEEbMpquUb+JYb3weY2OGUo3OFnRZL43BwKyfGKD1ny6vNZBLLB2mLEiOnzB2IxarVAoJJsJJ9sagJIQ3tXUQ0u7qMER51FjEgCSsyN4+hwU4cmmkgiAEUR7Y5hm8rUz+cR2P+HSpFMCpcn46wImHESgjkSMdYOAabJKokYWMaDvqVHVqBRLGB/WwA6kmwHMnGven9h/5DhS7U5etnmTL0gP1Yn7ZmJXUswSsXMXjqY5C9z/4VletX+Y/0xhLj8qJrImj+4TfQJlYlfTliCrmkBYMbkWty/5nE+anSdIk8sLnEcs+omDtf5X+s4YFI4kGlO3GIXTEkWk+W3vjXP5hzT1SIYLMSCDz9RywIOCPDySDTYSpkz541AdELf388X8jw1SyktuV28ztOMZ3JBWkKdPkR+eCHC8wrVKaREER7X6npjeFjTbgETqdmKZ2eov+Ur/64BcQyxp1XpliyiNJMTcAnYdZw7NVhgvUE/KP64Uu1KxmNQ/YE/W34YXG4k6qzGQsbHbRyqfA8satQ0ySAC0kRMDpIjePngoexNLUzd9W1MoUGU8MT8Pg3kzJnbFXszViuNJHikHbpPtcDDFx7NNSpF0MEEcgcdITdLsI1gj7QjUJbXsPTCOqMznXLGtpY1LCxaLbkbcj1nHPM/wylkM2WqohymZYSXQHunvDkxZeTCRvPIDHbOEVC1FGO7LqPq1z+OE/N5OlmVelVBIFVjYlSCrki45WiNjjmuNeSqcASD1Vhf0b5JgC1O8CYCRPl4cUs9+iLI1CpmqmncU+6GoSLMe7mLdeZw55TLnQpDsCVE3BG3Qi3tGFYcazIZgas+Ix4UEAGIED+uBBc/lc90cVEoFmuzWXy1RlpU6JCxBdQx2B6QLnlg3kuyCVKdOvrdKhGqKOhAQTtDBt1AsTBttAIpcRql5Ym55wB+GGnsfnzVy8NvTPd+wA0/Qx7Yc8Hs0mCTPIb+i5tw7JvUzq0mXRVFSHKiNSTDMP4ZB6H3GHji3ZijTy9c66kOwqESvxA7CF2J3/ACxT4XwWrT4zXc6Tlynf05J1JUcCm4X91vGSOt+Zkv23zgSiKcgGoSAOZgbAc7lcTPc/KR4aKtkbA7N4/dcx7VcCVEOYQeLw1D/lIC1I99Ln19cXezGf1JpmSII9sNZygqU9LD7sXveIgjpBIPkcc4RHyFfS4JQzp8wOU/tD6788JxUZIDgq/wCmYkOaYzwut8OAZFiJXw35AfCP5dOOLdtc0f12rTC+JmI3aANIdjHMyW8hpJgk2Y+z/a5qWYlye5eFK76BJKsPQkz5E9BjT9JHBaVGr+voTNUhGAUuNRBPeCNho1g3vNt8UMlzNJCW1nw2JP8A22QfJdlUrJNRjJM26jaeXlihn+ANRdFALa7KAviBAZmEgNMBZmJuLHBulmagog0zpIguQuq0bqJ52MmbYxwbiAzFRUdc0W1HSxFIgEDmqrKCGiTa5BuLSMmkBLrXsuflpLXEqWpBVWoCymfEvisOdkBgXgryxcy3EaTKqSdTEC0MwnckwfFz3na3PEXGsg2WqilV0lGM9BaGIF9pI8zAHUYp8NyLrWJ76nTp6yRNVZAkxAmQw9LdDj1my5u83lc/EiM3ta7VwPiRaiNW4JWN4APhB8wpAPmDiy2YJvgHwdlFMLTdWHVSCOm84JauU3weQL5GfKZHFu1oPmuDzRuB3gZyDabuzbxaZ+vLFCn3Shap1HQhUUmMq0A2YEEsQJMTsOqjDWq4Tu0nZuajVEqOpMNTAI0B0vcEGx6bc+uEyN5COOUagpt4Jm07umim2gaTYgFdIKEi0+JSOoNpg4Nhzjm/Ac9pK0YVqjoQhsPGykWEHSLsD5Tyx0fKSUUt8UCfWLj54AOtTTMo6JS45wmplq3/AFGgxqOoKulSTKNHhBF4BAMkEjzA04I5vtHSq5R2OunqUiI1XgyFZZVvhYAj9k9MMDKCpUixEH3xzTMZU0T+rFpp0mYrsNIkMCT5hgJ32FpGBJ74B2N+vu0+FokYf+Qr0/zSIcH4hSD00FakqpVJCBR4luQUIe7ASDIJkEEA7W+3PGa1TL6Mse7V3CM7HS7AzKU0+ITzY6SFkjCdmux9Gu5KVoqMNSkEAEjcgAA8rkbSSBbB3s9kHzh1VaoLUH/V3piPCFnWbmSCLBrTJtfCuaaq3tb87+E39lUCZZJfvHYeJr/yLN9K/CJuYkk74KTjVkHKLbY21+X1xQBQXlSW91qY1DyjENVgeXrjZlxqDjFmpQXPcNk6lJvuN8afqjAf8YMuoi2IJG0e+CCW4HYoSQ8GAYiDbE3ZsTmk8gx+hH54t1W3X8cb9nWisxbkhv0kjfoMc75SshH91vmjWdrBcxSHMrUAHWdJ/LATthT0mmdzDT5mx/PF7O1f8ZR8gf8AyDDEXadDrUxbT+d/e4wtmhCvxBzRv8x+kC7KoRmKfmWJ/lbDV2pE5c/5hgJwBR36db/6Tg12jpsadtRMgaQJ85tjn/OEGFH+3d9fwFa4GP8AD0v8i/hhFGYNLMVAfhNVz6Sx+mH3hKkUaYIIIUWNsIfF6BNR/wDO3+o4KIiyDymYklrGEcJ+ybHQlraRz8sc7e7t/mbn5nD5wmsFoUQTfu0tuT4RyFzjTOODTeAi+Ft9JbY8gbfP2wtrspKbiIu1aDeySKptfBLsLXitVp3GpQw9VMH6N9MUCuLfZmmRmkjo0+mk/nGKCe4QocOSJAnVqTBtQ0kwBeQYBJ3E9emEztZWZ8yoAg06ciTY6jDrI6jSOtwcPNR4E45/2hosatXYPqkX5hV035Ai0+hO2JQLXqPeGVfKsZfMSJ/v38/LFTj/AA1MxTKsPluOjL+8OnMSOmNMtVsrbaoDDodxblP0574vqThze8F57y6CW2/RclzWVajUNJ/iFwRsyn4WXqDg3kuLs9Fcu/iFPxCf2bAA9dLFY9R0wa7acENSl3iga0JZY3v8a/5Tv5MOhMINPOaStQbgwR1BBBB9b4hkYY3UNivpcPMzEMD+QbTmhO/d2ELeAIAhdjawB+kYv5OutEWAW2FHIZWoQNNIurMxkLTtq5h3DRy3EwLcsEqaADQZ8MyS4Pz8N/YjCHsHVViQ7ZSfL+aU+aZ6tfWQCqrqJLAad7XuNUKs8gW9ucZ/Kl6tRkUlS7EEAxckzHIHeMNvbXhrnLI2XDs3eTUC6pII0iF3a7KJuTbCbkKuapm1Uo0wVYNII3DAixxVGwBui8vEyufJTtK46e/ZTnwnJU6RZqY0vQo03ZupkPWJO/wEmBuEI2Jx0TLVFZQRzAN/O+OedmuKVlqMuYVdYVHAIK61Mq4vuGVzFtsNOWLU9Kz4Ssq3UdY5G8wdpxdhTdtKgxLLAKPI9z0xvmlR6bJUHhYdL+RE8xipl3Ebk+/9MS97G2KS29FO1o8UIrcPXvFFWZlXo1SNB+ztpMAwwB3gn4d7DDnw2pKAbG5Iv1Mx+0J589+eF/iwZ6PgI1KQykkWO3OwvAviHsjmHJdqnhdX7t6ZAkQDDAxJUmOZAk36RubldSKTM5tlOLXt/vGOOcY4Fm6mZKIXNPW61aqEKGraH7rVYwvwL5F2uNQJ67Rrq06SDeDF/bFbimQFen3ZZgpZWlTBlGDiDyuoxpGtpDJMh81x3N5FMhSqOzO1YvSWmCZ03liT92RMG/w+eHPg2fVHNUUwDUC94wUajpFtZA8QA57WA54KL2FyU3oB2/bdndvIjUbHATjHCc1lj3tNRUCEMCNIHhn4ww6QJHM8onCsz4zeXNe5H2VgfFM0tvLWwPP1T2oON/F/cYqcMzqV6S1KZkMNv2TzUjkQZEHFnQeuKF5VEaKZjiJmxsz9MRTgEVrOrENSeV8btjWccsOu6qMWMypBHPkfTBPs3Rb7RiLWHK8SY/DFRzg5wIjurbyZ9f8AiMC86J2FjBkBQvM5CocytQI2kMh5EAAifaMX+0qfZT0YfI2P5YsV+L0kYqSZG9jj3HVmg/sfkRgATYtVujYGPDTe5S9wNftl5XMfynDJWzAQzUICgbjz2t7Hrha4ET36e/8ApOC3G3mkxFxrA9YsfkZwTxbknCuywkjqfwp8xx6iolW1HkAD9bWGFTMCZLbkk/O+JGpTyAxstO0EfO4+UYINDUiSZ8h7ybeEUwKNOBuiz52G+EQU/G3+ZvxOHzhbzSS0eEf7YWX4BXLMYEFiR4hsTgGEAm1ZO0ujaGi0OZcGOyNDxu/RQo/iMn8Prgbm6JRirWI3v5Thk7L0CtGSILMWjmB8In5T74J57qnwsZ7TXhEatUSVF2ABj1JAPpY/LCt2py+mqrftrfzK2P0IxfpZz/HsvIpo9wNf9RiXtXQmmrfst9Gt+MYBuhCqmqSN3gfwlJyAYOzCD7mzeoJ9yQcW8lUlb7ix/rgJ2lzbU6a6UBJJMtIUQLqSNiylhOwuTABIrUa+ZNOmadKprJAIZCA6n4SWghDBF/LmDgryO8EtrDNEL3CM8XzqKsGT5YReJcOpvTesBpJdJHmSQT6EEH1Bw18ZyVdGp94qzqVoBkRquNtxzHyJwH7SyKRtMlf/ABIPptN/XD5WtfAT02VOCJjkAP1S6alanVFJajIrDfYCwiT8vS3libL1wrinUMsYOozBOqCuxhvI4pcYQmkzh9YqBTtBBgkj/L4BA5X64kzNOnXo98pIcIjRNtS6Vqte4uSbWMTiSLDtLe8NQnYzHSRvGR1NdptsTsmatnfs6iICWY3ETZLg+nP1OAHZgJmswocaUVtVbTIbSDAQMLgkxcXADbG+DGbz1Kll27lRD0NbGSSCFMSTe7FRGIv0bIjJmXTUfANU76gCTJgSfFJItsBIEmqUNDmtA0peLg5H9hJK4m70vUna/wB+niuht2a4dWpkLkqcEGCg0HzJKkN9SThTzmWfK1BlqhLKgLUXO+h5lGI+JlZQZ6Ms3OHXgLFKCFvvWX3wK/SAkvRaASO9FzFi6L8vDPtjIgGygeKvwz+1FvPGqBLnogLJGMnPOdgB9cU3HmZ8rD+v1xp+t+EiNJFm9v7H0x7AaOiuD4GDui/NEWV3Xx1NK7kf7YiXvGbWhIIXRqgFtPIMef8AfTGmWXWPEd/hAO377fkPXyOClKlCFRMEGPU8z54U+huAkvlIGoF9K0H8lY4fn3QhzYMYI5HVBBHz/HDVSrHCXw2qEZWqkHULjTYTcEE/l1wxtxJBeRiadmuynxsdPAqtB7/SLlhE41JwuZntMgsDP9+WBNbtO4nSL9T/AGcCzDPdwkswcjxdIvQ7I0Vrd+r1FfvA40NAgQe7YGQVnVtFmjDF74H8CqM9FWc3YSfe+Cen0whwykhTPzXR4UdRYxHqxcdL4iangbSi08Kqz4jcnFkoBjRscsoqDXOCuS4ilNIgkm5iPzOA9UQceNbGFto45iw2FNnPGzNtJOCeY4qr02TS11Im28euA6ty64k0gjfHFoRNmcLrnda8OOhw5mBO3pFsEM3xBHp6ACLjpHXlitVpBUQ9Sw+UR+OIswlNUU+LUwnlG5HSZtjDRNomucxpaPdrTGGOJ6iU1pg6iHZQw2g3IjrsMRZoIKakai7iRtHxRtvyxoWhnVX04uoRVAcEAC0ct+eLP/yJP2H+n9cCRkvAHJMGkz/xKQI22g4hq5JXy7EMwcpVZbgL9nFjYm8xI88ZkarGmQJR7fdp6q1dWWUEtpN4MfdDMOckQo856Q88I7SIlCkjJU1KigltMkgXJvuTf3wt8I4HSWn39dm71i+mI0gqBpkQSWvG8AbRiVitona8/l0GD7IOQF0rBoAL1V1Mz9sKv7+r6yR8rYNZ/jlOpTZNDXHON+XPrhZy9UbGJ6g+eAfG+PMlQogG25wQhzOoJUXaatHKIcbCuoVttQNuRAJU9LGDFtt8NfCFpJSARgAqgkyoC8gDy3B+uOTVa1Wo/ic+gt54LVe/qIIfxK2vn4iAY1CYJFoMcsFLhXXaviheyM0LKf8AjNIV6fgIdluCvQ9QeW3PlhA7RljRdo2F1NvvBZ2sVhmDfu4M8C7YxSLZtgtNTBqfegWIgXmbbA9AZBwJ7SZirXT9apKjZOrTKGkkeFTaWI2qbTFhYXIBM7ZBHbb0KxoMgzEUUi5eiWSqhfwKA6sQTe5DEC8aTcefOIxTytNk1qzU1VlIk1FG/OPi9gJ2wz9lMvr1ahJZojrLWHpt6c8V+O9mWpMQ4BpLZbQROwdpsfodx5KEmXVMMXaU2t0vZvP/AGIooSV3L7F4Ji33VHIb3k8gOh9gOEVKXDhU2avULAAwSjAIo6GdOr0K4RU4SrEKhguQt77kAeeOodnM09bMCmsClTAhQDAGyRe0IF+WGxESNu9lLjQ6F4aANdufP7pvdIagqq4Vf3WI1AeFRNhLR7ThW7f8XRWy6Em4qeOJACFFBMSfEZbbnho45xJqNKqTEU6NSoCsz4UI2JJ1Akc+ex5cY4Vx6mqLWzad7fu+7UttpMsxLyBsImL7YxhLDmVEW96eKOZmk+qL7DYg7jUDIMEFSDI8sTplgbFelzibssaNfLVCtVdIZhQVv+5SPiIp1KhuaZ1SFjmTMmAodieH1MxmNVS7sxUmpeDfUDJlYM/CQRBjFv8AqIod3VOa1oeXEbp0UhRa2PLxbTaCfeMFc7wyl35pU9WgLv8AGTBEkyfMc+nOcebgNMNOoQBJ8uU+k/L6mwSMcBarMDXABCqznugI8RO07A7T9LYrd0xFzg9Wyaj4SG9AcDs4+mPUf74oYAdk7IGi+iqjKYw+VB5XwWpZZDctPpizTRB0wBlaNkJnjpE+Bk6ANoAHyGCejzwBoZ9E3MDE/wD1+h+2PmMedIxxdYC+exUBL7AtMjDEbDHmA5HGhbpiRSErRhiGouJZj+uMMuCQbqlVT/jG2WzLKIERPNVPruMSVltjRKeN3CAW12ilfPuP2f5V/pjWpXLRMewA9dsRVVgg43UYygi7RxNEqbMUi1JCIhS83A3Ii032xiuhNGnsVAvtM6j788QulsR0hyxlJmcXtuK9+iIPTHc/djQoG0yHJ9djiDN0SaNOIhQZ+GZ1GPPniIKMecREb4wBN7Tw4pWe/HcGmSAe4JHkdTAj1uMVsmsZcGQIp5hdwLtp023vBxEybggHrirXyZElbiNsMYAdFTDiGvIB0Vnhs9w0shTTU8J0yG0+Egm9z06YAUs41NtSx7qDv5G2JWHX5HFesvTF0cQs3yvTZGHLSt2qrIZJpwN/sqf4xgXxftRVclVNMqwgxSpTexhtMj2xYrZHUcTZTgouYnDhDG05qRfBHNYKFUaP3ovy+V8Ec3KLrVoCjaJDHkDYmCYFuuCNLKgbqAMD+KV5oVFB0sSNJAki4gj0MHByEZSa2TZAIozZ4/CWuP8AACwepuq1DJ8mICnzuwg7bxgFwPjeY4e8rLUWMMjXVuo9cdA7M8BVMrme+rrdNFEF42hwoU+aggjcVMHeF9ksu1Otl6y60qeLoVKkqGU8j54+dynYqNtH5UjnP0if1rJMabbtTMRMXDDmt4kQR1i2Hfs/xUZyjrr5fQQxQeIeIqAWKMI8PiG+kSYvGOa8f7I1eH1xLM1Bj4HAjV+43JWj1kXA6dG7McYyWYprS0Ll6ogALsYEAg/e9TfDGQ9dlLiJyw5W/N47IbxtMpl1Zu6rKR4gzFwliDbxaX6Re8YJ/ovyTBHd0ZWJHxKy8rRIv/xgrmaBpytRQ6NYnefI/wC+IMmjqQKDAgWCPYhZAgGbhCQwnYagLWw9sdMIHKhOI7SZuYajhe49mgWNOCTWbQoifBR8TekuY9FPTCBmuBpmEzDgAFWVaSggAFRBVtPIsxBP7pPTA7tP2repmqr0pFFJSkVkkqCQXJvYnU38V52MvZbNMdgdEc/O34EgeuEFzQS52wC9rDMshnvxWOK9lK+TR6tFiqaR3mk6oQXLQ2+m5gyYmInFrJ8Zq0m7x8uO+1NTLIRDMZXUAYgkjcg2Jvywb49xd/1WsDcd04PnKkR7zGFmgwd3Zz4VLhXUSWMaFY9Ngg6S552mwbnP36q2eHJI3KmDs7najZhBdwZWpE+IsQSROyyAAByF5JJLiXUsx3AQTzuRH+qD/cYBdj8oKKCqRLQzqOi01JLe5GkehPTF7gvirELsApb/AC/et5wbeYx71b+ATnUHfRW2A0kgC0cusj8Y+eBOYod8CpZQw+AMSCzT8MxEEdSLx54lqZsrI5HlIsByJBudvliNtLDwm/4eeKWsI1RF7XaBCMxlqyNoYMD+I6gjceYxPlqAGk1Azk30BioA6sReTeAItBm+D3E81UqKEDWvqYADVMW6xYbm+5xROT0wyi5sR6RJHlcfXpjWm297Q+HvRYyHqEPzHDHH2tOdGowdyp30nnIHOPTGe/zHUfyp/TFrMVWRTJMW2m8HoN4nGY88EG9dU3sW9U9RjVjiY0x1+eIXWLY8G18UWkLQrjSYsfniTGKi2xqAhYK4hAjfbEqj643AmxxyGrUITnjDpiRd4nEpXHLgLVJjyGPGjzOLbJ6e+ImXrzxqyuqhUiTjVEnxc8WCsb3GInqDpbGgJ0bTeqgrVyLEWxinVDkAT7cuvpjDKTyxpk80aTMdIaRB5bYbksabqxuHDhfKFcSqAGy+8/nz+mBaZ0cx+WGLN8C76nroOW5aGsR1E7SLf1wtZzh1RXKWDDcqQYJEkdLTHqDiuEt2tUROkh+XX378EZydHVHTB7LZEXjClw/izUXXUoIBtb5SBv7YbeG8aWq3gAltgCJEC87fXA4jPuNl6fxTX/KqPFsiYgC/lf6YWM7k2IlU1FdlJ03NgdUcpmPLB/jvamlRqhapZGUgkFTdZvBAIbmLdMDu0Waq0g1XUHXSrCUcSpAioCq2Exv18jBMccmR3KXM+J+kh41ooVnMhUAL+EEzAHIhSQPTwwB6Yk/R72hrtWJrIyKyqCYcAuwLGS06SYBAt9cYpZ/vkVtQiQ1iLEDnc9cVMnX7pQ2vxSTETp7sNTvYgSGETvywqeHO5vgoHyxxvHZA1za6XmylVStREdG+IMsgi+8/3t0wi8a7AU4L5aoU5hHkj0Vt/n88R5Xi+YKjvXMmfCptBJgErueU+WF/jmdqpVLLVdJg2Zug5T644YYjlFLNDLo5v/qsU+0GZy80a0kCwkzt0P5YrcY7TvTylWtripU/w9EC0BoNap/CsKDyNQYxSzNSrQd6umoiSDq0jSCAdYJgEgyPfnaKGUqI7BwEdgIEDkLeCbhZn0v54lxU3ZAtCXhv6dG6YPaeNL98IXwDhdaoRC6BHxGbA76QfiMcza/3tsP2V4alOmEW0c/znmcVhmqZXfSd7YgbiNSp4KQEn70gepBNtrzsBfljxXOfMaC+gjjiwwsnXr+ghvGuIK1Wll3c6NampG5v4VHvDE+Q64s8KQVIREKpqLQdwNkU+YH4YAUMqCXltVQsCCl18JsoP3gd56geuOgcGoilT7wi5nxW+LcjqDcY9nAwZUhhdI4yu2Riu/d0WUbpTMeRqHQw/wDPb92cUeEhtDCbtY+exA9vyxrm88XVAqwAASNyWg+In3IA5A+ZxTymaZSbuoufuAeviUtPlGPVaKGqETNa63KzwuqteoqF1Dxsq7mDaTIif+cTZ/N1aQg0YA/dYbbn5zjHAeHLTzFOqO9lWJNrCQRc6doJ+mHevnCTAmN4wmWctfpqFEyaQki6Pglrg2lyTqG9lNmtzjzttgjmqF+ttvqfri3XpIqkruASLneDuJ9sLuZ4jVN7DYjf25/TAteXmwqxixGBZJ+i2rZl6YKgKRM+NVaDtIDAweWK3/Va3/4//wCNH/0xUzHEKjyGi/kMa9wv7X/h/wDbFIyjdoSjjmE90etBdQKjEL0xz/vyxJQaRfEhXHhbLyKDhYVV6PliJk64IHGj0wcaHIHQ9FRWnGM6Z2F8WqlCdrH+98RUEabiIwWZKMRBpV3pEbjG6N1xbzAkeWKhpHGg2gezIdF5iMQ6sSMnS+Mrl2MWtjdEFOcdFCRONxTEYn1rGkAj1xHO+OtGBl1BVepkgdv7+WPZLIaQTUYBWBGlt+UEE7HfE9MEi+KXEFJa+5tJ9JEe2DDnHS09mIfSJ5JEpUjpbUFliRBk78tsLK6XcsVuzEwNr3O98HOGUCrCAdJHi6EfmZxQ4vkTTMgSp2MbeR8/79DjcA4jkqlk+QZqU44ejIyjwhhBjmLGD9MJHEEOUrrUWqAoPIksZ3AERtHPButm3SmxBixOFHiTGrLHYA/niyBh1JOieZmFnaVqCK9hb9pssmYzVMF6jFqRLTECDYU99yST6+eHPP8ACZoL3ocK9BKRYkkoAoUqQLgHxTsftGG50lb7K8J77MUtUkUkJZlJsv3QTyYmAIvv0w6ZnOPWsYCEiEHxNBlQbXPhmzcto8WF4jR4aOEOIbUhPXX1XLjl0y9RlWl4xKm87HrO3p5b42qVmcXgAXgSdup2xL2o4fVWszCWJJJK7MQxQlbC3h32nVgac9VJjujsDqMg7jkY2g88WNcKClIRzLZYaS0mASdXufLpAvgPxFQQRN2vJ8REDz+XljenmKmgSLMYibX9LT78t8Yr0JC26+XLc/LBVaN5BAoeam4FljTmrKyAw0uupWVhDLyAPIesbYo8d4LoZKlIUloPpNNVGoKdIlXDEsTY+Ob+QsGGhQ1KAdl6cz5+QFvUnphh4PlqNSmUJTUzEEGZkGYiN9IkRfoLYhnhaTmXoYSnNyu4XNsjw8udWqTJJpqAgi5F4MXiwG3TDBl0UAEKB0AFzPLqSDIuTGD1TsNDaqTswOwGnn74lThVLL+KoRI+7qVmkcjBMf3OEtgjJ0KvEEZ1tDuHdlTPe92VVjMmABO+5A6nc88a8WzigaKQLhZOobFjALz+yIgf74vZnOVsy4sSqjdvhQARJERH1Jwdp9nlqy1YMx+5TLBfDaJj4fOPfFNiIDN6LZZAxmUpN4U5amuqbW9Y6cgPPBjh3CgTLgkQCgDadZMRc30xJJjl1wwv2XUme6oACy/9wGNyCQ1x/TBnh2VVKeqe8PxagJnmAvl0i3SBACZMUK7q8F9ZjSpLwuaYhEAgeEAq3zJmfWfTGP1BreFz/EPrYW+RwQfPjujUhkgMftEbw6RMsBy9DfEOU45RchddyDBKsqtp+IqW3G/yO8HEoc/ekTXOGyr5zIR4tBI28JJMel5HpGFzP5ZkMmGU8zb+ztbDrk89Tqz3bBoiYnnt+GB/GMqVUukwPiTwaI5lg0CLbX3sMMilLXU4JrJa0eFz3OEAyoLegP5wMe74/sN/Mn/tghl+CMtRi5prSlmRTXVSRcqOZUQRNpHQ4JfquW/Zf+XOf+mLXSDiz5KdzReibqG+LOKlI+Nff8Di5jyXbpMBtqxjBxtjDYFOWuPY9j2OXLOIKiHliwMexoNIHNDgoKdK18er07bkAdMTnGMdazsxVKhptqAtPMycYcbYvkYp1NsGDaRIzKo0rKADqEWv/Tri13euzARy6z18saaQd8WKG3vjCUUe9L1CiFEDEhE2O2PYycCqEN4lwWnVplLpPNIB9LiIwCodhVBE1iQLWSCfcsRz6YbxjGGNnkaKBW3pXCAVaKZNKdGghVW1szDxMdC6rlt2Ow+URtTLlNVTS2mkjEsdi3iRVtY3dpgkQF88F+PG1H/96f6XwGzJ1ZTOTfSVKzeDopmR0Mkn3OGxajX3qu3FoNwbs3WrDV8FP7rNuesL09Ywbr9kcnApVKrCo1we8Ct08K7R5QcNFAQqgbaR+Axyyp4nbV4pmZvN+c74dG98xNGq6IdAj7fo9kn7e0Qv2cHqJho3Awr5CiQsNp21W/eUN7GTceZw1/o5qsWzSljpVk0rJgSGmBsJxr2xUCuYEfYza3N7/QYYyV4kMbjaJhS1k3GkAkyOvOefzn6434Tk3fNKqqzXZzBWQCSZ8QI20i/liDL7qeeg/iv9T88P/YukvdO+kai8FoEkBRAJ3IEn54ZNL2bSaVMUmQOcqdarXQ6WJm8wFBI6kqBJNpi2+KVdqa/GRqKzB1G3lyne3lh7AxznjI8K+Rqx/Ov9T88Iw0mc1VeSthxhIoCkR4dmBUqJTVYUkHRtIG7nqbTecMfEs0mWpl9M7KANyT58hucAOxg+0J56DfnumKPaZQc1WkTCpE8vDjZGB8uTgD1SsUTJKI/BNnDuMJUpmo0Jp+IMRYdZ6YDcQzwrVu5FR0KyaYEjW0SpLWCjkOoO98J2WrMrVgrFR3MwpIvrW9udh8sdD4ZRVxlqjKGqd0DrYAtOkX1G/M/PCnxtiN+nooHgA6ILxPKRlS+YVu8D+FWrMRJtqAJIncx5csBO6WlUHeEsFUHSBzjUEM7CTB97Yu9pK7M7AsxAdoBJIG23TFTjp+3b0X/QuLIGmqPN/pWYdgO/vZM3Z/iZMFwGYmCU0jSltIKjcA+6gjzwyOoIIIBBsQdj5HHP+GmM1lYtIEx565w88TYijVIJBFNyCLEEKYI6YhxTA14rlIxDQHaKGnwagsaaSqAICrIX+UHSfli33K/sr8hhL/RFm6lTJuaju5FYgF2LEDQhi52kk++HfCJAWuLSUl2hpf/Z"  className="w-full" />
  </div>
  
</div>
<div className="flex w-full justify-center gap-2 py-2">
  <a href="#item1" className="btn btn-xs">1</a>
  <a href="#item2" className="btn btn-xs">2</a>
  <a href="#item3" className="btn btn-xs">3</a>
  <a href="#item4" className="btn btn-xs">4</a>
</div>



        </div>
    );



    
};

export default Carusel;
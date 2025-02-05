document.addEventListener("DOMContentLoaded", function () {
    const menuToggle = document.querySelector(".menu-toggle");
    const menu = document.querySelector(".menu");
  
    // Toggle the menu on click
    menuToggle.addEventListener("click", () => {
      menu.classList.toggle("active");
    });
  
    // Close the menu if a click happens outside the menu
    document.addEventListener("click", (event) => {
      if (!menu.contains(event.target) && !menuToggle.contains(event.target)) {
        menu.classList.remove("active");
      }
    });
  });



    // Chatbot functionality
    const chatbotIcon = document.getElementById('chatbotIcon');
    const chatbotPopup = document.getElementById('chatbotPopup');
    const closeBtn = document.getElementById('closeBtn');
    const sendBtn = document.getElementById('sendBtn');
    const userInput = document.getElementById('userInput');
    const chatbotMessages = document.getElementById('chatbotMessages');

    // Open chatbot popup
    chatbotIcon.addEventListener('click', () => {
      chatbotPopup.style.display = 'block';
    });

    // Close chatbot popup
    closeBtn.addEventListener('click', () => {
      chatbotPopup.style.display = 'none';
    });

    // Send user input to chatbot
    sendBtn.addEventListener('click', () => {
      const message = userInput.value.trim();
      if (message) {
        const userMessage = document.createElement('p');
        userMessage.textContent = `You: ${message}`;
        chatbotMessages.appendChild(userMessage);
        userInput.value = '';

        // Simple chatbot responses based on user input
        const botMessage = document.createElement('p');
        
        // Add more queries and responses here
        if (message.toLowerCase().includes('hello')) {
          botMessage.textContent = `Bot: Hello! How can I assist you today?`;
        } 
        else if (message.toLowerCase().includes('in which temple ayirakkal or thousand - pillared mandapa situated')) {
          botMessage.textContent = `Bot:madurai meenakshi temple`;
        }
         else if (message.toLowerCase().includes('who presented the goddess meenakshi _a kavacha_(armour) made of gold and set with jewels')) {
          botMessage.textContent = `Bot:virappa nayaka of tanjore`;
        } 
        else if (message.toLowerCase().includes('who was virappa nayaka and what was his present')) {
          botMessage.textContent = `Bot:he was a contemporary of varatunga and srivallabha of madurai and presented the goddess meenakshi a kavacha ( armour )`;
        } 
        else if (message.toLowerCase().includes('how was the kavacha made')) {
          botMessage.textContent = `Bot:kavacha was made up of gold and set with jewels.`;
        } 
        else if (message.toLowerCase().includes('hill stations')) {
          botMessage.textContent = `Bot: Tamil Nadu's hill stations like Ooty, Kodaikanal, and Yercaud are perfect for a getaway.`;
        } 
        else if (message.toLowerCase().includes('why was the porch named as "ashta sakti mandapam"')) {
          botMessage.textContent = `Bot:? it was because on account of the eight sakties being figured therein.`;
        } 
        else if (message.toLowerCase().includes('who was karaikkal ammaiyar')) {
          botMessage.textContent = `Bot:she was a female saint, who by her staunch devotion to siva and very severe penance, became famous as one of the 63 devotees of siva.`;
        } 
        else if (message.toLowerCase().includes('who was murtinayanar')) {
          botMessage.textContent = `Bot:he was born in madurai in the vaisya caste. he was in the habit of supplying sandal for the daily worship of the presiding god of the place.`;
        } 
        else if (message.toLowerCase().includes('what was the consequence of the trouble taken by murtinayanar')) {
          botMessage.textContent = `Bot:he attempted to make use of his elbows`;
        } 
        else if (message.toLowerCase().includes('what is pudhumandapam')) {
          botMessage.textContent = `Bot:a excellencly well - sculptured mandapam with 33 feet by 105 feet`;
        } 
        else if (message.toLowerCase().includes('what are the other names of pudhumandapam')) {
          botMessage.textContent = `Bot:the other names are summer resort of god and vasanta mandapam`;
        } 
        else if (message.toLowerCase().includes('what does the middle row of pillars contain ')) {
          botMessage.textContent = `Bot:the statues of 10 of the nayaka kings together with their wives`;
        } 
        else if (message.toLowerCase().includes('where does the 64 leelas of god situated')) {
          botMessage.textContent = `Bot:in the north - east wall around the tank in meenakshi temple of madurai.`;
        } 
        else if (message.toLowerCase().includes('what is the teppakulam of meenakshi temple called')) {
          botMessage.textContent = `Bot:vandiyur teppakulam.`;
        } 
        else if (message.toLowerCase().includes('what is the structure of the teppakulam')) {
          botMessage.textContent = `Bot:it is a picturesque tank of about 1000 feet square with a square island in the middle wherein is a small shrine.`;
        } 
        else if (message.toLowerCase().includes('where is the floating festival celebrated')) {
          botMessage.textContent = `Bot:on the vandiyur teppakulam `;
        } 
        else if (message.toLowerCase().includes('why was teppakulam considered as a holy place')) {
          botMessage.textContent = `Bot:because when it was excavated for removing earth thereform to build the tirumala nayak palace, the huge vinayaka in the temple is said to have been found buried therein.`;
        } 
        else if (message.toLowerCase().includes('who was meenakshi')) {
          botMessage.textContent = `Bot:the goddess meenakshi incarnated herself in madurai as the daughter of the pandya king`;
        } 
        else if (message.toLowerCase().includes('how many gopurams are there in meenakshi temple')) {
          botMessage.textContent = `Bot:5 gopuram `;
        } 
        else if (message.toLowerCase().includes('which is the highest gopuram among the five gopurams of the temple')) {
          botMessage.textContent = `Bot:the southern gopuram is the highest with 48.8 mtrs.`;
        } 
        else if (message.toLowerCase().includes('what is the time for celebrating floting festival')) {
          botMessage.textContent = `Bot:january - february in the teppakulam`;
        } 
        else if (message.toLowerCase().includes('what is the time for celebrating chithirai festival')) {
          botMessage.textContent = `Bot:in april - may to celebrate the marriage of meenakshi with sundaresvara`;
        } 
        else if (message.toLowerCase().includes('when was the temple  completely destroyed')) {
          botMessage.textContent = `Bot:it was completely destroyed in 1310.`;
        } 
        else if (message.toLowerCase().includes('what are the special features of thousand pillar mandapam')) {
          botMessage.textContent = `Bot:the 1000 pillared hall is major feature with intricately carved pillars. there are musical pillars that produce sounds of different sizes.`;
        } 
        else if (message.toLowerCase().includes('what is the history of meenakshi')) {
                      botMessage.textContent = `Bot:king malayawja 
            pandya and his wife kanchanamalai prayed to lord shiva, 
            pleading with him to grant them a boy child. but, to their 
            surprise, a three-year-old female child emerged from the 
            sacred fire. what's incredible is that she was born with three  `;
        } 
        else if (message.toLowerCase().includes('what is the history of madurai meenakshi temple')) {
                    botMessage.textContent = `Bot:lord indra built a small structure (tower) over a naturally 
          formed rock structure (also known as lingam) to show his devotion to god shiva.  when the gods were worshipping one day, a human witnessed 
          it and immediately informed king kulashekhara pandya, who immediately built the temple there and people began to worship the site . `;
        } 
        else if (message.toLowerCase().includes('when will the three breasts disappear')) {
          botMessage.textContent = `Bot:the three breasts will disappear when she meet her future husband.`;
        } 
        else if (message.toLowerCase().includes('when was meenakshi third breast vanish')) {
                      botMessage.textContent = `Bot:lord shiva confronted her 
            when she attempted to attack mount kailasha to the north, 
            deep in the himalayas. meenakshi's third breast vanished 
            when she saw him, and she realised her prophecy had come 
            true and she had met her better half.`;
        } 
        else if (message.toLowerCase().includes('how was meenakshi grown up')) {
          botMessage.textContent = `Bot:she was grown up like a boy`;
        } 
        else if (message.toLowerCase().includes('how was meenakshi showed herself')) {
          botMessage.textContent = `Bot:she showed herself like a fighter`;
        } 
        else if (message.toLowerCase().includes('what is the another name of chithirai festival')) {
          botMessage.textContent = `Bot:the grand wedding between lord shiva and meenakshi.`;
        } 
        else if (message.toLowerCase().includes('who instructed king kulasekara pandya to built the temple')) {
          botMessage.textContent = `Bot:lord shiva`;
        } 
        else if (message.toLowerCase().includes('list out the major gopurams')) {
                    botMessage.textContent = `Bot:kadaka gopuram,
          sundareshwarar gopuram, chitra gopuram, nadukkattu 
          gopuram, mottai gopuram, nayaka gopuram.`;
        } 
        else if (message.toLowerCase().includes('how many entrence does it have')) {
          botMessage.textContent = `Bot:4`;
        } 
        else if (message.toLowerCase().includes('who blessd the pond')) {
          botMessage.textContent = `Bot:lord shiva`;
        } 
        else if (message.toLowerCase().includes('what is the meaning of "puram"')) {
          botMessage.textContent = `Bot:puram means exterior or gateway`;
        } 
        else if (message.toLowerCase().includes('who reconstructed the meenakshi temple')) {
          botMessage.textContent = `Bot:? after defeating ahsan khan and his descendants, the 
            vijayanagar empire led by kumara kampana took over 
            madurai. during that time, the temple was rebuilt and 
            reopened.`;
        } 
        else if (message.toLowerCase().includes('when was the rebuilt process resume')) {
          botMessage.textContent = `Bot:1959`;
        } 
        else if (message.toLowerCase().includes('what is the meaning of "puram"')) {
          botMessage.textContent = `Bot:puram means exterior or gateway`;
        }   else if (message.toLowerCase().includes('who blessd the pond')) {
          botMessage.textContent = `Bot:lord shiva`;
        } 
        else if (message.toLowerCase().includes('what is mandala')) {
          botMessage.textContent = `Bot:a mandala is a structure constructed in accordance 
            with symmetry laws.`;
        } 
        // MADURAI TAMIL
        else if (message.toLowerCase().includes('ஆயிரக்கால் மண்டபம் எந்த கோவிலில் அமைந்துள்ளது')) {
          botMessage.textContent = `Bot:மதுரை மீனாட்சி அம்மன் கோவில்.`;
        } 
        else if (message.toLowerCase().includes('கல்லறைகளின் சிலைகள் எந்த விதிமுறைகளுக்கு ஏற்ப உருவாக்கப்பட்டன')) {
          botMessage.textContent = `Bot:சாஸ்திரங்களில் கொடுக்கப்பட்ட உத்தரவுகளின் படி.`;
        } 
        else if (message.toLowerCase().includes('வீரப்ப நாயக்கர் யார், அவர் கொடுத்த பரிசு என்ன')) {
          botMessage.textContent = `Bot:அவர் மதுரையின் வரதுங்கரும் ஸ்ரீவல்லபரின் நவகாலத்தினரானவரும், தேவி மீனாட்சிக்கு பொன்னால் செய்யப்பட்ட ஒரு 
          கவசத்தை கொடுத்தவரும் ஆவார்.`;
        } 
        else if (message.toLowerCase().includes('மீனாட்சி அம்மன் கோவிலுக்கு செல்லும் மண்டபத்தின் பெயர் என்ன')) {
          botMessage.textContent = `Bot:அஷ்ட சக்தி மண்டபம்.`;
        } 
        else if (message.toLowerCase().includes('மீனாட்சி அம்மன் கோவிலில் ஒரு பெண் சித்தருக்கு அர்ப்பணிக்கப்பட்ட சன்னதி யாருக்கு உள்ளது')) {
          botMessage.textContent = `Bot:காரைக்கால் அம்மையார்.`;
        }  
         else if (message.toLowerCase().includes('மூர்த்திநாயனார் யார்')) {
          botMessage.textContent = `Bot:அவர் மதுரையில் வைசியர் குலத்தில் பிறந்தவர். அவர் தினசரி கோயிலின் மூலவருக்கு சந்தனம் வழங்கிய பழக்கத்துடன் இருந்தார்.`;
        }   
        else if (message.toLowerCase().includes('மூர்த்திநாயனாரின் முயற்சியின் விளைவாக என்ன நடந்தது')) {
          botMessage.textContent = `Bot:அவர் தனது மார்புகளை (அழுத்தமாக) பயன்படுத்த முயற்சித்தார்`;
        }   
        else if (message.toLowerCase().includes('மீனாட்சி கோவிலில் உள்ள 64 கலை ஓவியங்கள் என்னவைக் குறிக்கின்றன')) {
          botMessage.textContent = `Bot:அவை கடவுளின் 64 சுந்தர லீலாக்களை குறிக்கின்றன.`;
        }   
        else if (message.toLowerCase().includes('புதுமண்டபத்தின் மற்ற பெயர்கள் என்ன')) {
          botMessage.textContent = `Bot:மறுபெயர்கள்: கோவிலின் கோடை மண்டபம் மற்றும் வசந்த மண்டபம்.`;
        }  
         else if (message.toLowerCase().includes('வெளியில் உள்ள தழும்பு கல்லறைகளில் என்ன காணப்படுகிறது')) {
          botMessage.textContent = `Bot:பார்வதி தேவி - கல்யாணசுந்தரர் திருமணம், கரும்பு தின்றுகொண்டிருக்கும் யானை, கன்றுகளை புகட்டும் பன்றியாக சுந்தரேஸ்வரர் போன்றவை காணப்படுகின்றன.`;
        }   
        else if (message.toLowerCase().includes('மீனாட்சி அம்மன் கோவிலின் தெப்பக்குளத்தின் பெயர் என்ன')) {
          botMessage.textContent = `Bot:வண்டியூர் தெப்பக்குளம்`;
        }   
        else if (message.toLowerCase().includes('தெப்பக்குளத்தின் அமைப்பு என்ன')) {
          botMessage.textContent = `Bot:சுமார் 1000 அடி சதுர அளவுடைய அழகிய குளமாகும், இதன் மையத்தில் சதுரத் தீவும், அதில் சிறிய கோயிலும் உள்ளது.`;
        }   
        else if (message.toLowerCase().includes('தெப்பக்குளம் ஏன் புனிதமான இடமாக கருதப்படுகிறது')) {
          botMessage.textContent = `Bot:திருமலை நாயக்கர் அரண்மனை கட்டுவதற்காக மண் அகழ்ந்த போது, கோவிலின் பெரிய விநாயகர் சிலை அங்கே புதைந்திருந்ததாகக் கூறப்படுகிறது.`;
        }   
        else if (message.toLowerCase().includes('மீனாட்சி யார்')) {
          botMessage.textContent = `Bot:மீனாட்சி அம்மன் மது(ரை)புரியில் பாண்டிய அரசனின் மகளாக அவதரித்தாள்.`;
        } 
       else if (message.toLowerCase().includes('மீனாட்சி கோவிலில் எத்தனை கோபுரங்கள் உள்ளன')) {
          botMessage.textContent = `Bot:கோவிலில் 5 கோபுரங்கள் உள்ளன.`;
        } 
        else if (message.toLowerCase().includes('கோவிலின் தீர்த்தக்குளம் குறித்த பிரபலமான கதையைச் சொல்லுங்கள்')) {
          botMessage.textContent = `Bot:இங்கே கடைசி சங்க கூட்டம் நடைபெற்றபோது, இலக்கிய படைப்புகளை தீர்த்தக்குளத்தில் வீசினார்கள்`;
        } 
        else if (message.toLowerCase().includes('மதுரை மீனாட்சி அம்மன் கோவிலில் கொண்டாடப்படும் முக்கிய திருவிழாக்கள் என்ன')) {
          botMessage.textContent = `Bot:முக்கிய திருவிழாக்கள் ஆகஸ்ட்-செப்டம்பர் மாதங்களில் ஆவணி மூல்ய திருவிழா மற்றும் பிப்ரவரி-மார்ச் மாதங்களில் மாசி மண்டல உற்சவம்.`;
        } 
        else if (message.toLowerCase().includes('முத்துப்பிள்ளை மண்டபம் என்றால் என்ன')) {
          botMessage.textContent = `Bot:மீனாட்சி அம்மன் மது(ரை)புரியில் பாண்டிய அரசனின் மகளாக அவதரித்தாள்.`;
        } 
        else if (message.toLowerCase().includes('கோவில் எப்போது மீண்டும் பழமையான புகழுடன் புதுப்பிக்கப்பட்டது')) {
          botMessage.textContent = `Bot:14ஆம் நூற்றாண்டில் கோவில் பழமையான சிறப்புடன் மீண்டும் அமைக்கப்பட்டது.`;
        } 
        else if (message.toLowerCase().includes('ஆயிரம் தூண்கள் மண்டபத்தின் சிறப்பான அம்சங்களைச் குறிப்பிடுங்கள்')) {
          botMessage.textContent = `Bot:ஒரு பெரிய பாறையிலிருந்து செதுக்கப்பட்ட இந்த மண்டபம் கலை மற்றும் திறமையின் அதிசயமாகும். 1000 தூண்கள் உள்ளன, அவை இந்திய புராணங்களில் வரும் தேவதைகளின் சிற்பங்களுடன் செதுக்கப்பட்டுள்ளன`;
        } 
        else if (message.toLowerCase().includes('மதுரை மீனாட்சி கோவிலின் வரலாறு என்ன')) {
          botMessage.textContent = `Bot:இந்திரன் சிவபெருமானிடம் பக்தி செலுத்தும் விதமாக ஒரு இயற்கையாக உருவான பாறை அமைப்பின் (லிங்கமாகக் கருதப்படும்) மேல் சிறிய கோபுரத்தை அமைத்தார்.ஒரு நாள் தேவர்கள் பூஜை செய்துகொண்டிருந்தபோது, ஒரு மனிதன் அதை கண்டு கோவிந்தன் குலசேகர பாண்டியரிடம் தகவல் தெரிவித்தார். அவர் உடனடியாக அங்கு கோவிலைக் கட்டி, மக்கள் அந்த இடத்தை வழிபடத் தொடங்கினர்`;
        } 
        else if (message.toLowerCase().includes('மீனாட்சியின் மூன்றாவது மார்பு எப்போது மறைந்தது')) {
          botMessage.textContent = `Bot:அவள் உத்தரத்தில் இமய மலைகளின் மையத்திலுள்ள கைலாச மலையை தாக்க முயன்ற போது சிவபெருமான் அவளை எதிர்கொண்டார்.அவனைப் பார்த்தவுடன் மீனாட்சியின் மூன்றாவது மார்பு மறைந்தது, அப்போது அவள் தனது கணவனை சந்தித்தல் நிறைவேறியதென்று உணர்ந்தாள்.`;
        } 
        else if (message.toLowerCase().includes('மீனாட்சி தனது திறமைகளை எவ்வாறு காட்டினாள்')) {
          botMessage.textContent = `Bot:அவள் தனது திறமைகளை போராளியாக வெளிப்படுத்தினாள்.`;
        } 
        else if (message.toLowerCase().includes('மீனாட்சி கோவிலின் கட்டுமானத்தை யார் மீண்டும் செய்தனர்')) {
          botMessage.textContent = `Bot:அசான் கான் மற்றும் அவரது சந்ததிகளை வெற்றி கொண்ட பின்,குமார கம்பணா தலைமையிலான விஜயநகர பேரரசு மதுரையை கைப்பற்றியது. அப்போது கோவில் மீண்டும் கட்டி திறக்கப்பட்டது.`;
        } 

// thanjavur english
          else if (message.toLowerCase().includes('who commissioned the construction of the tanjore big temple')) {
          botMessage.textContent = `Bot:Rajaraja Chola I, also known as Arulmozhi Varman, commissioned the construction of the Tanjore Big Temple.`;
        } 
        else if (message.toLowerCase().includes('to which dynasty did rajaraja chola i belong')) {
          botMessage.textContent = `Bot:  he belonged to the chola dynasty. `;
        } 
        else if (message.toLowerCase().includes('where is the tanjore big temple located')) {
          botMessage.textContent = `Bot:a mandala is a structure constructed in accordance 
            with symmetry laws.`;
        } 
        else if (message.toLowerCase().includes('what are some other names of the tanjore big temple')) {
          botMessage.textContent = `Bot:Brihadeswara Temple, Rajarajesvaram, Tanjai Periya Kovil, Rajarajeswara Temple, and Peruvudaiyar Kovil.`;
        } 
        else if (message.toLowerCase().includes('how long did it take to sculpt the rocks for the temple')) {
          botMessage.textContent = `Bot:It took nearly 25 years to sculpt the rocks.`;
        } 
        else if (message.toLowerCase().includes('what does the inscription reveal about the construction timeline')) {
          botMessage.textContent = `Bot: The construction began in the nineteenth year of Rajaraja’s reign and was completed by the twenty-fifth year.  `;
        } 
        else if (message.toLowerCase().includes('what artifact was handed over on the completion date')) {
          botMessage.textContent = `Bot: a copper pot for the finial at the top of the vimana was handed over`;
        } 
        else if (message.toLowerCase().includes('what was the copper pot overlaid with')) {
          botMessage.textContent = `Bot:It was overlaid with a gold plate weighing nearly 35 lbs`;
        } 
        else if (message.toLowerCase().includes('what is the architectural significance of the vimana’s finial')) {
          botMessage.textContent = `Bot:  The finial, made of copper and overlaid with gold, represents the grandeur and precision of Chola architecture`;
        } 
        else if (message.toLowerCase().includes('what surrounds the temple on the east and west')) {
          botMessage.textContent = `Bot:  It is encircled by a moat on the east and west.  `;
        } 
        else if (message.toLowerCase().includes('what is located to the north of the temple')) {
          botMessage.textContent = `Bot:  The Shivaganga gardens are located to the north.  `;
        } 
        else if (message.toLowerCase().includes('what shrines are located near the eastern gateway')) {
          botMessage.textContent = `Bot:Two small shrines dedicated to Ganapathi and Subrahmanya are located near the eastern gateway. `;
        } 
        else if (message.toLowerCase().includes('what was the outer court used for in the past')) {
          botMessage.textContent = `Bot:The outer court was used as an arsenal by the French in 1772 and later by the English`;
        } 
        else if (message.toLowerCase().includes('what are the dimensions of the main court')) {
          botMessage.textContent = `Bot:   The main court is about 500 feet long and 250 feet broad`;
        } 
        else if (message.toLowerCase().includes('what is located in the eastern and southern wings of the cloister')) {
          botMessage.textContent = `Bot:  The eastern and southern wings house the Yaga-sala, kitchen, store rooms, and feeding halls.  `;
        } 
        else if (message.toLowerCase().includes('what are the outer measurements of the temple')) {
          botMessage.textContent = `Bot: the temple measures 793 feet by 397 feet.  `;
        } 
        else if (message.toLowerCase().includes('what is another name of the shivalinga')) {
          botMessage.textContent = `Bot:another name is dakshina-meru vitankan`;
        } 
        else if (message.toLowerCase().includes('who was the other cowherdess mentioned in the story')) {
          botMessage.textContent = `Bot:  another cowherdess named alagiya nayaki is mentioned.  `;
        } 
        else if (message.toLowerCase().includes('what did alagiya nayaki contribute to the temple')) {
          botMessage.textContent = `Bot:she supplied a keystone slab from her courtyard.  `;
        } 
        else if (message.toLowerCase().includes('what does the moat symbolize around the temple')) {
          botMessage.textContent = `Bot: it symbolizes the defensive and protective design of the temple complex`;
        } 
        else if (message.toLowerCase().includes('what are the dimensions of the great nandi')) {
          botMessage.textContent = `Bot: its height is over 12 feet, length 19 feet, and breadth 8.1 feet.`;
        } 
        else if (message.toLowerCase().includes('what tradition surrounds the size of the great nandi')) {
          botMessage.textContent = `Bot:there is a tradition that the nandi is imperceptibly growing in size over time.`;
        } 
        else if (message.toLowerCase().includes('what happened to the toad inside the nandi')) {
          botMessage.textContent = `Bot:the toad was removed and placed in a sacred pond nearby, which is now a well on the northern prakara near the sabhapati mandapa`;
        } 

// thanjai tamil
        else if (message.toLowerCase().includes('தஞ்சை பெரிய கோவிலைக் கட்டி முடிக்கச் செய்தவர் யார்')) {
          botMessage.textContent = `Bot:ராஜராஜ சோழன்,என்று அழைக்கப்படும், அருள்மொழி வர்மன் தஞ்சை பெரிய கோவிலைக் கட்டி முடிக்கச் செய்தார். `;
        } 
        else if (message.toLowerCase().includes('தஞ்சை பெரிய கோவில் எங்கு அமைந்துள்ளது')) {
          botMessage.textContent = `Bot:இது தமிழ்நாட்டின் தஞ்சாவூரில், காவிரி நதியின் தெற்கு கரையில் அமைந்துள்ளது.  `;
        } 
        else if (message.toLowerCase().includes('தஞ்சை பெரிய கோவிலின் பிற பெயர்கள் என்ன')) {
          botMessage.textContent = `Bot:பிரகதீஸ்வரர் கோவில், ராஜராஜேஸ்வரம், தஞ்சை பெரிய கோவில், ராஜராஜேஸ்வரர் கோவில், பெருவுடையார் கோவில்`;
        } 
        else if (message.toLowerCase().includes('கோவிலின் கற்களை வடிவமைக்க எவ்வளவு நேரம் எடுத்தது')) {
          botMessage.textContent = `Bot:கற்களை வடிவமைக்க சுமார் 25 ஆண்டுகள் எடுத்தது.`;
        } 
        else if (message.toLowerCase().includes('கட்டுமான காலத்தைப் பற்றிக் கல்வெட்டில் என்ன கூறப்பட்டுள்ளது')) {
          botMessage.textContent = `Bot:கட்டுமானம் ராஜராஜ சோழனின் ஆட்சியின் 19 ஆம் ஆண்டில் தொடங்கி, 25 ஆம் ஆண்டில் முடிவடைந்தது.  `;
        } 
        else if (message.toLowerCase().includes('கட்டுமானம் முடிந்த நாளில் எது ஒப்படைக்கப்பட்டது')) {
          botMessage.textContent = `Bot:விமானத்தின் உச்சியில் உள்ள பீடத்திற்கு உள்ள வெண்கலப் பானை ஒப்படைக்கப்பட்டது.  `;
        } 
        else if (message.toLowerCase().includes('வெண்கலப் பானை என்னினால் அலங்கரிக்கப்பட்டது')) {
          botMessage.textContent = `Bot:அது சுமார் 35 பவுண்டுகள் எடையுள்ள தங்க தட்டினால் அலங்கரிக்கப்பட்டது. `;
        } 
        else if (message.toLowerCase().includes('விமானத்தின் பீடத்தின் கட்டிடக் குறியீடு என்ன')) {
          botMessage.textContent = `Bot:வெண்கலத்தால் செய்யப்பட்ட மற்றும் தங்கத்தால் அலங்கரிக்கப்பட்ட பீடு சோழக் கட்டிடக்கலைவின் மகத்துவத்தையும் துல்லியத்தையும் பிரதிபலிக்கின்றது`;
        } 
        else if (message.toLowerCase().includes('கோவில் கோட்டையின் எந்த பகுதியில் அமைந்துள்ளது')) {
          botMessage.textContent = `Bot:இது சிறிய கோட்டையின் தெற்கு பாதியின் பெரும்பகுதியை வகிக்கின்றது.  `;
        } 
        else if (message.toLowerCase().includes('கோவிலின் தெற்கில் என்ன அமைந்துள்ளது')) {
          botMessage.textContent = `Bot:மெட்டூர் சேனல், முதலில் ஓடையாக இருந்தது, கோவிலின் தெற்கில் அமைந்துள்ளது`;
        } 
        else if (message.toLowerCase().includes('கிழக்கு வாயிலுக்கு அருகிலுள்ள எந்த ஆலயங்கள் உள்ளன')) {
          botMessage.textContent = `Bot:கிழக்கு வாயிலுக்கு அருகிலுள்ள இரண்டு சிறிய ஆலயங்கள், கணபதி மற்றும் சுப்பிரமணியன் ஆகியோருக்கு அர்ப்பணிக்கப்பட்டுள்ளன`;
        } 
        else if (message.toLowerCase().includes('பழைய காலத்தில் வெளிப்புற மண்டபம் எதற்காக பயன்படுத்தப்பட்டது')) {
          botMessage.textContent = `Bot: வெளிப்புற மண்டபம் 1772 ஆம் ஆண்டில் பிரஞ்சினர்களால் ஆயுதக் கிடங்காகப் பயன்படுத்தப்பட்டது, பின்னர் ஆங்கிலேயர்களால் பயன்படுத்தப்பட்டது.  `;
        } 
        else if (message.toLowerCase().includes('பிரதான மண்டபத்தின் பரிமாணங்கள் என்ன')) {
          botMessage.textContent = `Bot:பிரதான மண்டபம் சுமார் 500 அடி நீளம் மற்றும் 250 அடி அகலத்துடன் உள்ளது.  `;
        } 
        else if (message.toLowerCase().includes('திருச்சுற்றுமாளிகையின் கிழக்கு மற்றும் தெற்கு பக்கங்களில் என்ன அமைந்துள்ளது')) {
          botMessage.textContent = `Bot:திருச்சுற்றுமாளிகையின் கிழக்கு மற்றும் தெற்கு பக்கங்களில் யாகசாலா, சமையலறை, கொள்கையறைகள் மற்றும் உணவு கூடங்கள் உள்ளன.  `;
        } 
        else if (message.toLowerCase().includes('திருச்சுற்றுமாளிகையின் சுவரில் என்ன காட்டப்பட்டுள்ளது')) {
          botMessage.textContent = `Bot:சுவரில் சிவனின் அறுபத்து நான்கு  திருவிளையாட்டுகளை விவரிக்கும் ஓவியங்கள் உள்ளன `;
        } 

        else if (message.toLowerCase().includes('சிவலிங்கத்தின் அடிப்படை பெயர் என்ன')) {
          botMessage.textContent = `Bot:இதனை முதலில் அடவல்லன் (நடனமாடக்கூடியவர்) என்று அழைத்தனர்.  `;
        } 
        else if (message.toLowerCase().includes('சிவலிங்கத்தின் பெயர்கள் எங்கு காணப்படுகின்றன')) {
          botMessage.textContent = `Bot:இந்த பெயர்கள் திருவிசைப்பில் சிதம்பரத்தில் உள்ள தேவதையின் பெயர்களாக இடம்பெற்றுள்ளன.  `;
        } 
        else if (message.toLowerCase().includes('கதையில் குறிப்பிடப்பட்ட மற்றொரு மாடுவாளி யார்')) {
          botMessage.textContent = `Bot:மற்றொரு மாடுவாளி என்ற பெயரில் அழகிய நாயகி குறிப்பிடப்பட்டுள்ளார் `;
        } 
        else if (message.toLowerCase().includes('சோழராஜா அழகிய நாயகியை அங்கீகரிக்க என்ன செய்தார்')) {
          botMessage.textContent = `Bot:ராஜா தஞ்சாவூர் நகரில் மற்றும் அதனைச் சூழ்ந்துள்ள பகுதிகளில் சில நிலங்களை பரிசாக வழங்கினார் `;
        } 
        else if (message.toLowerCase().includes('தஞ்சாவூர் கோவிலில் பெரிய நந்தி எங்கு உள்ளது')) {
          botMessage.textContent = `Bot:அது மிகவும் அழகாக வேலை செய்த நாயக்க மண்டபத்தில் உள்ளது. `;
        } 
        else if (message.toLowerCase().includes('பெரிய நந்தி மற்ற நந்திகளுடன் ஒப்பிடும்போது எங்கு நிற்கின்றது')) {
          botMessage.textContent = `Bot:இது இரண்டாவது பெரிய நந்தி ஆகும், அதற்குப் பெரிதான நந்தி லேபாக்ஷியில், அனந்தபுரம் மாவட்டத்தில் உள்ளது.`;
        } 
        else if (message.toLowerCase().includes('நந்தியின் வளர்ச்சிக்கு இன்னொரு விளக்கம் என்ன')) {
          botMessage.textContent = `Bot:அந்த கல்லில் உள்ள ஒரு உயிருள்ள தேரை காரணமாக அது வளர்ந்ததாக கூறப்படுகிறது`;
        } 
// mahabalipuram english
        else if (message.toLowerCase().includes('mahabalipuram was also known as')) {
          botMessage.textContent = `Bot:mamalapuram mallapuram and mavalipuram`;
        } 
        else if (message.toLowerCase().includes('what is the earliest known example of a dravidian style of architecture')) {
          botMessage.textContent = `Bot:rock cut sculpture `;
        } 
        else if (message.toLowerCase().includes('out of seven pagoda how many pagodas are washed by the tsunami and which year')) {
          botMessage.textContent = `Bot:six were washed out during 2004 tsunami, remaining one is the mahabalipuram shore temple `;
        } 
        else if (message.toLowerCase().includes('what is the avatar of vishnu in this temple')) {
          botMessage.textContent = `Bot:varaha ( boar incarnation`;
        } 
        else if (message.toLowerCase().includes('krishna mandapa popularly known as')) {
          botMessage.textContent = `Bot:govardhana uddhara`;
        } 
        else if (message.toLowerCase().includes('describe the temple style')) {
          botMessage.textContent = `Bot:it is an example for ancient rock cut temple the  monolithic style and free standing style`;
        } 
        else if (message.toLowerCase().includes('describe the process to maintain the perpetual lamp')) {
          botMessage.textContent = `Bot:the lamp was maintain with great care by the support of the donations from the royal members and some other wealthy people`;
        } 
        else if (message.toLowerCase().includes('explain the architectural style of mahabalipuram shore temple')) {
          botMessage.textContent = `Bot:the shore temple dedicated to lord shiva is a prominent attraction with standing coastal location and remarkable stone carvings. the five rathas or chariots showcase monolithic rock cut culture`;
        } 
        else if (message.toLowerCase().includes('what are the donation things for maintaining the lamp')) {
          botMessage.textContent = `Bot:they give sheeps as the donation to the temple in need of ghee for lamping as well as the gold was given`;
        } 
        else if (message.toLowerCase().includes('describe the vimana of this temple')) {
          botMessage.textContent = `Bot:vimana is shaped like a stepped pyramid on the top there is a crown like structure`;
        } 
        else if (message.toLowerCase().includes('explain the group of monuments at mahabalipuram')) {
          botMessage.textContent = `Bot:it is a home to majority of the monolithic rock cut structures nearly 40 monument found here. including world’s largest open air rock relief`;
        } 
        else if (message.toLowerCase().includes('what are the events which conducted in every year')) {
          botMessage.textContent = `Bot:events like plays and dance performance to honor the areas ancient leafy.`;
        } 
        else if (message.toLowerCase().includes('describe about vishnu temple')) {
          botMessage.textContent = `Bot:the figure of a vishnu and the shrine base are cut out of bedrock the shore temple is largely  made of masonry constructor from quarried rock block. as a result the shore temple is a thought to be partially carved out of rock and partially built from stone blocks `;
        } 
        else if (message.toLowerCase().includes('the features of shiva temple in mahabalipuram')) {
          botMessage.textContent = `Bot:it faces east as well as the sea. it has a slender and elongated vimana with a fluted granite`;
        } 
        else if (message.toLowerCase().includes('explain the carvings in shiva shrine')) {
          botMessage.textContent = `Bot:rich sculptural depictions on both their inner and outer walls includes carvings of shiva ( human-like form) with his consort the goddess parvati, and their son skanda`;
        } 
        else if (message.toLowerCase().includes('what archeaologist  with the help of diving team explode?')) {
          botMessage.textContent = `Bot:an underwater site 700 m east of the shore temple and found ruined wall,sculptures  blocks of rectangular stones laid parallel to the shore line and remains of 40 other monument.`;
        } 

        else if (message.toLowerCase().includes('the majestic shore temple is locally known as')) {
          botMessage.textContent = `Bot:alaivay-k-kovil`;
        } 
        else if (message.toLowerCase().includes('what are the elements in the shore temple')) {
          botMessage.textContent = `Bot:the elements of the temple including the shrines, gateways, walls, and superstructures were constructed out of quarried stone and mortar.`;
        } 

// mahabalipuram tamil
        else if (message.toLowerCase().includes('மாமல்லபுரம் மற்ற என்ன பெயர்களில் அறியப்பட்டது')) {
          botMessage.textContent = `Bot:மாமல்லபுரம், மல்லாபுரம், மற்றும் மவளிபுரம்`;
        } 
        else if (message.toLowerCase().includes('யார் இந்த கோயிலுக்கு “ஏழு கோபுரங்கள்” என்று பெயரிட்டார்கள்')) {
          botMessage.textContent = `Bot:ஐரோப்பிய கடற்கரையாளர்கள், இது “ஏழு ஸ்டூபிகள்” அல்லது இந்து கோயிலின் உச்சி என்று அழைத்தனர்`;
        } 
        else if (message.toLowerCase().includes('வைஷ்ணவக் கிரந்தமான “நாலாயிர திவ்ய பிரபந்தம்” இக்கோயிலை எப்படி குறிப்பிடுகிறது')) {
          botMessage.textContent = `Bot:கடல் மாலைத் தலசயனமாக குறிப்பிடுகிறது`;
        } 
        else if (message.toLowerCase().includes('இந்த கோயிலில் எத்தனை முக்கிய ஆலயங்கள் உள்ளன')) {
          botMessage.textContent = `Bot:மூன்று : விஷ்ணு மற்றும் 2சிவன்.`;
        } 
        else if (message.toLowerCase().includes('விஷ்ணுவின் மூலமூர்த்தியின் கரு  என்ன')) {
          botMessage.textContent = `Bot:விஷ்ணு தனது வலது காலால் ஆதிசேஷனை நிலைநிறுத்தி, பூமாதேவியை தனது வலது தொடையில் வைத்துள்ளார். இது பூமாதேவியை ராட்சஸர்களிடமிருந்து காப்பாற்றியதை குறிக்கிறது`;
        } 
        else if (message.toLowerCase().includes('மாமல்லபுரம் கடலோர கோயிலின் அமைப்பு என்ன')) {
          botMessage.textContent = `Bot:முன்னாலும் பின்புறமும் இரண்டு கோயில்கள் உள்ள ஒரே நேரமைப்பு`;
        } 
        else if (message.toLowerCase().includes('கோவில் கட்டிடக் கலை விளக்குங்கள்')) {
          botMessage.textContent = `Bot:இது பண்டைய பாறை வெட்டுக் கோவிலின் ஒரு உதாரணமாகும். இது ஒரே பாறையில் உருவாக்கப்பட்ட மோனோலிதிக் மற்றும் சுதந்திரமாக நிற்கும் கலையின் உதாரணமாகும்`;
        } 
        else if (message.toLowerCase().includes('நிரந்தர விளக்கை பராமரிக்க உதவும் செயல்முறை என்ன')) {
          botMessage.textContent = `Bot:ராயல் உறவினர் மற்றும் செல்வந்தர்களின் உதவியுடன் நன்கொடை மூலம் பராமரிக்கப்பட்டது`;
        } 
        else if (message.toLowerCase().includes('2004 சுனாமியில் சேதமடைந்த நினைவுச்சின்னங்கள் என்ன')) {
          botMessage.textContent = `Bot:பாலி பீடம் மற்றும் வராகா சிற்பம் சேதமடைந்தது`;
        } 
        else if (message.toLowerCase().includes('மாமல்லபுரம் கடலோர கோயிலில் காணப்படும் நான்கு கலாச்சார வடிவங்கள் என்ன')) {
          botMessage.textContent = `Bot:குகை கோயில், செதுக்கிய தனித் துண்டுகள், சிற்பக் காட்சிகள், மற்றும் குடிசைக் கோயில்கள்`;
        } 
        else if (message.toLowerCase().includes('கோயில் நுழைவு வாயிலில் உள்ள சிற்பம் என்ன')) {
          botMessage.textContent = `Bot:துவாரபாலர்கள் (வாயில் காவலர்கள்).`;
        } 
        else if (message.toLowerCase().includes('மாமல்லபுரம் நினைவுச்சின்னக் குழுவை விளக்கவும்')) {
          botMessage.textContent = `Bot:மொத்தம் 40 க்கு மேற்பட்ட மொனொலிதிக் கோயில்கள் மற்றும் உலகின் மிகப்பெரிய வெளிப்புற கலைப்பாறை இதில் உள்ளன.`;
        } 
        else if (message.toLowerCase().includes('இந்த கோயிலின் திசை நோக்கு என்ன')) {
          botMessage.textContent = `Bot:கோயில் கிழக்கு நோக்கி அமைந்துள்ளது; கடலையும் காட்சிப்படுத்துகிறது.`;
        } 
        else if (message.toLowerCase().includes('விஷ்ணு கோயிலைப் பற்றி விவரிக்கவும்')) {
          botMessage.textContent = `Bot:கோயிலின் அடிப்படை பாறையில் செதுக்கப்பட்டது; மற்ற பகுதி கற்களால் கட்டப்பட்டது.`;
        } 




        else if (message.toLowerCase().includes('மாமல்லபுரத்தில் சிவன் கோயிலின் பெயர் என்ன')) {
          botMessage.textContent = `Bot:க்ஷத்ரிய சிம்ம பல்லவேஸ்வரர் கோயில்`;
        } 
        else if (message.toLowerCase().includes('சிவன் ஆலயத்தின் லிங்கத்தை விவரிக்கவும்')) {
          botMessage.textContent = `Bot:டாரா லிங்கம் என அழைக்கப்படுகிறது`;
        } 
        else if (message.toLowerCase().includes('சிவன் கோயிலின் உள்ளே உள்ள சிற்பங்களை விவரிக்கவும்')) {
          botMessage.textContent = `Bot:சிவபெருமான், பார்வதி, மற்றும் ச்கந்தர் சிற்பங்கள் உள்ளன`;
        } 
        else if (message.toLowerCase().includes('சுனாமியின் பின் கண்டறியப்பட்ட பொருட்கள் என்ன')) {
          botMessage.textContent = `Bot:புதைந்த கோயில்கள் மற்றும் சிற்பங்கள்.`;
        } 
        else if (message.toLowerCase().includes('மாமல்லபுரம் கோயிலை யார் கட்டினார், எப்போது')) {
          botMessage.textContent = `Bot:நரசிம்ம வர்மன் II (ராஜசிம்மர்), 8ஆம் நூற்றாண்டில்`;
        } 
        else if (message.toLowerCase().includes('கோயிலின் முக்கிய பகுதிகள் என்ன')) {
          botMessage.textContent = `Bot:கோபுரங்கள், வாயில்கள், சுவர்கள் மற்றும் கட்டிடங்கள் கற்களால் கட்டப்பட்டன.`;
        } 
        else if (message.toLowerCase().includes('மாமல்லபுரம் கோயில் எங்கு அமைந்துள்ளது')) {
          botMessage.textContent = `Bot:வங்கக்கடலுக்கு அருகே`;
        } 
        else if (message.toLowerCase().includes('மாமல்லபுரம் கோயில் எங்கு அமைந்துள்ளது')) {
          botMessage.textContent = `Bot:வங்கக்கடலுக்கு அருகே`;
        } 
        else if (message.toLowerCase().includes('மாமல்லபுரம் கோயில் எங்கு அமைந்துள்ளது')) {
          botMessage.textContent = `Bot:வங்கக்கடலுக்கு அருகே`;
        } 

// others
        else if (message.toLowerCase().includes('thank you')) {
          botMessage.textContent = `Bot: You're welcome! Let me know if you need more information.`;
        } else if (message.toLowerCase().includes('places to visit')) {
          botMessage.textContent = `Bot: Some must-visit places in Tamil Nadu are Chennai, Ooty, Kodaikanal, Madurai, and Rameswaram.`;
        } else if (message.toLowerCase().includes('culture')) {
          botMessage.textContent = `Bot: Tamil Nadu has a rich cultural heritage, famous for its classical dance forms like Bharatanatyam and its vibrant festivals like Pongal and Diwali.`;
        } else if (message.toLowerCase().includes('shopping')) {
          botMessage.textContent = `Bot: You can shop for traditional sarees, handicrafts, and jewelry at local markets in Tamil Nadu like those in Chennai, Madurai, and Coimbatore.`;
        } else if (message.toLowerCase().includes('festivals')) {
          botMessage.textContent = `Bot: Tamil Nadu celebrates a variety of festivals like Pongal, Tamil New Year, Diwali, and the famous Chithirai Festival in Madurai.`;
        } else if (message.toLowerCase().includes('history')) {
          botMessage.textContent = `Bot: Tamil Nadu has a rich history dating back to the ancient times, with dynasties like the Cholas, Pandyas, and Cheras shaping its culture.`;
        } else if (message.toLowerCase().includes('temples in madurai')) {
          botMessage.textContent = `Bot: The Meenakshi Amman Temple is a famous landmark in Madurai. It's one of the largest and most prominent temples in Tamil Nadu.`;
        } else if (message.toLowerCase().includes('mountain trekking')) {
          botMessage.textContent = `Bot: Tamil Nadu offers several trekking opportunities, such as the Nilgiri Hills, Agasthyakoodam, and the Western Ghats.`;
        } else if (message.toLowerCase().includes('eco-tourism')) {
          botMessage.textContent = `Bot: Tamil Nadu is home to many eco-tourism sites like Silent Valley, Kalakkad Mundanthurai Tiger Reserve, and the Gulf of Mannar Marine National Park.`;
        } else if (message.toLowerCase().includes('how to reach')) {
          botMessage.textContent = `Bot: Tamil Nadu is well-connected by air, rail, and road. The state has major airports in Chennai, Coimbatore, and Madurai, along with a good rail and bus network.`;
        } else if (message.toLowerCase().includes('best time to visit')) {
          botMessage.textContent = `Bot: The best time to visit Tamil Nadu is during the winter months, from November to February, when the weather is cool and pleasant.`;
        } else {
          botMessage.textContent = `Bot: Sorry, I didn't understand that. Can you please rephrase?`;
        }

        chatbotMessages.appendChild(botMessage);

        // Auto scroll to bottom of messages
        chatbotMessages.scrollTop = chatbotMessages.scrollHeight;
      }
    });



// slideshowconst slides = document.querySelectorAll('.slide');
const slides = document.querySelectorAll('.slide');
const dots = document.querySelectorAll('.dot');
let currentSlide = 0;

// Show the slide
function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.style.transform = `translateX(${(i - index) * 100}%)`;
  });

  dots.forEach((dot, i) => {
    dot.classList.toggle('active', i === index);
  });

  currentSlide = index;
}

// Auto slide every 3 seconds
function autoSlide() {
  const nextSlide = (currentSlide + 1) % slides.length;
  showSlide(nextSlide);
}

// Initialize the slideshow
// showSlide(0);
// setInterval(autoSlide, 3000); // Change slide every 3 seconds

// Dot click event
dots.forEach((dot, index) => {
  dot.addEventListener('click', () => showSlide(index));
});

// second update main

function redirectTo(page) {
  window.location.href = page;
}


function redirectTo(url) {
  window.open(url, '_blank');
}


// scroll up

window.onscroll = function() { toggleScrollButton() };

function toggleScrollButton() {
    let button = document.querySelector(".scroll-top");
    if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
        button.style.display = "block";
    } else {
        button.style.display = "none";
    }
}

function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}


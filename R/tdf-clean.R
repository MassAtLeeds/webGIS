# Packages we'll be using
library(dplyr)
library(tm)
library(stringr)

# Load the Tour de France tweets
tdft <- read.csv("~/Dropbox/final_output.csv", stringsAsFactors = F)
head(tdft)
s <- head(tdft$text)

# Take a random selection of the data
set.seed(2014)
tdft <- tdft[sample(nrow(tdft), size = 1000), ]

tdft <- select(tdft, lat, lon, created, text, language, n_followers, n_tweets, user_location)

# Remove sensitive text
summary(factor(Encoding(tdft$text)))
Encoding(tdft$text) <- "UTF-8"
tdft$text <- iconv(tdft$text, "UTF-8", "UTF-8",sub='')
tdft$text <- gsub('@\\S+', '@', tdft$text) # remove all to '@' texts
tdft$text <- gsub('http\\S+', 'http', tdft$text) # remove all to hyperlinks
head(tdft$text)

tdft$text <- removePunctuation(tdft$text) # remove superfluous punctuation

vc <- VCorpus(VectorSource(tdft$text))
dtm <- DocumentTermMatrix(vc)

# Cleaning up the dataset, removing sparse terms
lfts <- findFreqTerms(dtm, lowfreq = 1, highfreq = 5) # low frequency terms
tdft$text <- removeWords(tdft$text, words = lfts) # remove low freq terms
tdft$text <- stripWhitespace(tdft$text) # remove excess whitespace
tdft$text <- str_trim(tdft$text) # remove begining or trailing whitespace

# Function to reduce the max. number of words in a string
maxwords <- function(x, max = 10){
  lwords <- length(x)
  if(lwords > max) lwords <- max
  paste0(x[1:lwords], collapse = " ")
}

# Apply maxwords to the data
tdft$text <- sapply(words, maxwords)

# Check what we're saving
head(tdft)

# Save the output data
write.csv(tdft, file = "~/repos/webGIS/input-data/tdf_tweets.csv", row.names = FALSE)



